export type ResultType =
  | "fibroz"
  | "pnevmania"
  | "health"
  | "bronchiectasis"
  | "bronchiolitis"
  | "copd"
  | "healthy"
  | "pneumonia"
  | "urti";

  export type DataType = "mskt" | "noise";

  export interface PredictionRequest{
    path:string;
    data_type:DataType;
    patient:number;
  }

  export interface PredictionResponse{
    id:number;
    path:string;
    result:ResultType;
    data_type:DataType;
    patient:number;
  }

export interface PatientResult {
    id: number;
    data_type: DataType
    result: ResultType
    path: string
  }
  
  export interface UploadResponse {
    file: string
    file_name: string
    file_path: string
    file_extension: string
    uploaded_at: string
    created_at: string
  }
  