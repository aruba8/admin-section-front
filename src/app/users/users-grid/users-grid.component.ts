import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {UserModel} from '../user.model';

@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.css']
})
export class UsersGridComponent implements OnInit {

  users: UserModel[];

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }


}
