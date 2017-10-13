import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserModel} from '../user.model';
import {Response} from '@angular/http';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userId: number;
  editedUser: UserModel;
  userLoaded = false;

  constructor(private usersService: UsersService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.userId = +params['id'];
        this.usersService.getUser(this.userId).subscribe(
          (resp: Response) => {
            this.editedUser = resp.json();
            this.userLoaded = true;
          },
          (error) => {
            console.log(error);
          }
        );
      }
    );
  }

  onCancel() {
    this.router.navigate(['/users']);

  }

}
