import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5067/api/Auth'

  constructor(private http: HttpClient) { }

  register(registration : {username: string, email: string,password: string, confirmPassword: string}) : Observable<any>{
    return this.http.post(`${this.apiUrl}/register`, registration)
  }
  login(credentials: { username: string, password: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, credentials);}
}
