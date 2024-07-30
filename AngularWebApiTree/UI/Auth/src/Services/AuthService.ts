import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5067/api/Auth'
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  register(registration : {username: string, email: string,password: string, confirmPassword: string}) : Observable<any>{
    return this.http.post(`${this.apiUrl}/register`, registration)
  }
  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      map((response: any) => {
        {
          if (response && response.token) {
            localStorage.setItem('token', response.token);
          }
        }
        return response;
      })
    );
  }

  logout() : void {
    localStorage.removeItem("token")
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
