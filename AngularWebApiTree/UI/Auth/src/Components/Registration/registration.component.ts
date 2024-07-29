import {Component} from "@angular/core";
import {AuthService} from "../../Services/AuthService";
import {FormsModule} from "@angular/forms";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  standalone: true,
  imports: [
    FormsModule
  ]

})
export class RegistrationComponent {
  username :string = ""
  email : string = ""
  password:string = ""
  confirmPassword: string = ""

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register({
      username: this.username,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
    }).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error)
    })
  }


}
