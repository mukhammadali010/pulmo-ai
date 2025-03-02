import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { type Observable, BehaviorSubject, tap } from "rxjs"
import { environment } from "../environments/environments"
import { ChangePasswordRequest, LoginRequest, LoginResponse, RegisterRequest, UserProfile } from "../models/backend/auth.model"



@Injectable({
  providedIn: "root",
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/account`
  private currentUserSubject = new BehaviorSubject<UserProfile | null>(null)
  public currentUser$ = this.currentUserSubject.asObservable()

  constructor(private http: HttpClient) {
    this.loadUserFromStorage()
  }

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login/`, credentials).pipe(
      tap((response) => {
        localStorage.setItem("access_token", response.tokens.access)
        localStorage.setItem("refresh_token", response.tokens.refresh)
        this.loadUserProfile()
      }),
    )
  }

  register(userData: RegisterRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/register/`, userData)
  }

  changePassword(passwordData: ChangePasswordRequest): Observable<any> {
    return this.http.put(`${this.apiUrl}/change-password/`, passwordData)
  }

  getUserProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.apiUrl}/me/`)
  }

  updateUserProfile(profileData: Partial<UserProfile>): Observable<UserProfile> {
    return this.http.patch<UserProfile>(`${this.apiUrl}/me/`, profileData).pipe(
      tap((user) => {
        this.currentUserSubject.next(user)
      }),
    )
  }

  logout(): void {
    localStorage.removeItem("access_token")
    localStorage.removeItem("refresh_token")
    this.currentUserSubject.next(null)
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem("access_token")
  }

  getToken(): string | null {
    return localStorage.getItem("access_token")
  }

  private loadUserFromStorage(): void {
    if (this.isAuthenticated()) {
      this.loadUserProfile()
    }
  }

  private loadUserProfile(): void {
    this.getUserProfile().subscribe({
      next: (user) => this.currentUserSubject.next(user),
      error: () => {
        this.logout()
      },
    })
  }
}

