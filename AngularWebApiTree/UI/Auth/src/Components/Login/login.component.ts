import {Component} from "@angular/core";
import {AuthService} from "../../Services/AuthService";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [FormsModule]
})
export class LoginComponent {
  username: string = ""
  password: string = ""
  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.login({username: this.username, password: this.password}).subscribe({
      next: (response) => {
        alert("Успешный вход, ваш токен - " + response.token)
        console.log(response);
      },
      error: (error) => console.log(error)
    })
  }

}
