import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserModel} from '../user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userId: number;
  editedUser: UserModel;

  constructor(private usersService: UsersService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.userId = +params['id'];
        this.editedUser = this.usersService.getUsers()[this.userId];
      }
    );
  }

  onCancel() {
    this.router.navigate(['/users']);

  }

}
