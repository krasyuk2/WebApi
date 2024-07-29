import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RegistrationComponent} from "../Components/Registration/registration.component";
import {AuthService} from "../Services/AuthService";
import {HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegistrationComponent, HttpClientModule],
  template: `<app-registration></app-registration>`,
  //templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AuthService]

})
export class AppComponent {
  title = 'Auth';
}
