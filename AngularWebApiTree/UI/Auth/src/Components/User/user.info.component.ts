import { Component } from '@angular/core';
import {AuthService} from "../../Services/AuthService";
import {DataService} from "../../Services/DataSercivce";

@Component({
  selector: 'app-user-info',
  standalone: true,
  template: `
    <div>
      <button (click)="getAdminData()">Get Admin Data</button>
      <button (click)="getUserData()">Get User Data</button>
      <button (click)="logout()">Logout</button>
    </div>

  `
})
export class UserInfoComponent {
  private data: string = "";


  constructor(private authService: AuthService, private dataService: DataService) {}

  getAdminData(): void {
    this.dataService.getAdminData().subscribe(
      (response) => {
        this.data = response.message;
      },
      (error) => {
        console.error(error);
        this.data = 'Access denied';
      }
    );
  }

  getUserData(): void {
    this.dataService.getUserData().subscribe(
      (response) => {
        this.data = response.message;
      },
      (error) => {
        console.error(error);
        this.data = 'Access denied';
      }
    );
  }

  logout(): void {
    this.authService.logout();

  }
}
