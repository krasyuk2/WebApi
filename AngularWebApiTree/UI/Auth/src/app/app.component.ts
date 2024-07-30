import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RegistrationComponent} from "../Components/Registration/registration.component";
import {AuthService} from "../Services/AuthService";
import { HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "../Components/Login/login.component";
import {UserInfoComponent} from "../Components/User/user.info.component";
import {DataService} from "../Services/DataSercivce";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegistrationComponent, HttpClientModule, LoginComponent, UserInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AuthService,DataService]

})
export class AppComponent {
  title = 'Auth';
}
