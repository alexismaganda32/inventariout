import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../../auth/services/auth/auth.service';
import { User } from '../../../auth/interfaces/user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public userService: UserService
  ) { }

  user: User[];

  ngOnInit() {
    this.auth.getUserLogged().subscribe((response) => {

      var email = response.email;

      this.userService.getUserInfo(email).subscribe((response: any) => {
        this.user = response;
      })
    });
  }

}
