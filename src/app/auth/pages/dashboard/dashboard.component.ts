import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { NavController } from '@ionic/angular';
import { UserService } from '../../services/user/users.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: any;
  apiUser: User;

  constructor(
    private nav: NavController,
    private authService: AuthService,
    private userService: UserService,
  ) { }


  ngOnInit() {
    //OBTIENE EL NOMBRE DEL USUARIO Y LO SETEA
    this.authService.getUserLogged().subscribe((response) => {
      this.user = response;

      this.userService.getUserByEmail(this.user.email).subscribe((response) => {
        this.apiUser = response;
      })

    });
  }



  logOut() {
    this.authService.logout().then(() => this.nav.navigateBack(['/login']));
  }

}
