import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {UserModel} from '../user.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.css']
})
export class UsersGridComponent implements OnInit {

  users: UserModel[];

  constructor(private usersService: UsersService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }

  onEditUser(userId: number) {
    this.router.navigate([userId, 'edit'], {relativeTo: this.route});
  }

}
