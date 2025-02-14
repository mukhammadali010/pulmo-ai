import { Injectable } from "@angular/core";
import * as RecordRTC from "recordrtc";
import moment from "moment";
import { Observable, Subject } from "rxjs";

interface RecordedAudioOutput {
  blob: Blob;
  title: string;
}

@Injectable()
export class AudioRecordingService {
  private stream: MediaStream | null = null;
  private recorder: RecordRTC.StereoAudioRecorder | null = null;
  private interval: any;
  private startTime: moment.Moment | null = null;
  private _recorded = new Subject<RecordedAudioOutput>();
  private _recordingTime = new Subject<string>();
  private _recordingFailed = new Subject<string>();

  getRecordedBlob(): Observable<RecordedAudioOutput> {
    return this._recorded.asObservable();
  }

  getRecordedTime(): Observable<string> {
    return this._recordingTime.asObservable();
  }

  recordingFailed(): Observable<string> {
    return this._recordingFailed.asObservable();
  }

  startRecording(): void {
    if (this.recorder) return; // Prevent starting multiple recordings

    this._recordingTime.next("00:00");

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((s: MediaStream) => {
        this.stream = s;
        this.record();
      })
      .catch((error) => {
        this._recordingFailed.next("Failed to access microphone: " + error.message);
      });
  }

  abortRecording(): void {
    this.stopMedia();
  }

  private record(): void {
    if (!this.stream) return;

    this.recorder = new RecordRTC.StereoAudioRecorder(this.stream, {
      type: "audio",
      mimeType: "audio/webm",
    });

    this.recorder.record();
    this.startTime = moment();

    this.interval = setInterval(() => {
      if (!this.startTime) return;

      const diffTime = moment.duration(moment().diff(this.startTime));
      const time = this.toString(diffTime.minutes()) + ":" + this.toString(diffTime.seconds());
      this._recordingTime.next(time);
    }, 1000);
  }

  private toString(value: number): string {
    return value < 10 ? "0" + value : value.toString();
  }

  stopRecording(): void {
    if (this.recorder) {
      this.recorder.stop((blob: Blob) => {
        if (this.startTime) {
          const mp3Name = encodeURIComponent("audio_" + new Date().getTime() + ".mp3");
          this.stopMedia();
          this._recorded.next({ blob, title: mp3Name });
        }
      });
    }
  }

  private stopMedia(): void {
    if (this.recorder) {
      this.recorder = null;
      clearInterval(this.interval);
      this.startTime = null;
      if (this.stream) {
        this.stream.getAudioTracks().forEach((track: MediaStreamTrack) => track.stop());
        this.stream = null;
      }
    }
  }
}
 