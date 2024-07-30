import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "./AuthService";


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:5067/api/Data'; // Замените на адрес вашего API

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAdminData(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(`${this.apiUrl}`, { headers });
  }

  getUserData(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(`${this.apiUrl}/user`, { headers });
  }

  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
}
