import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {UserModel} from '../user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.html',
  styleUrls: ['./users-grid.component.css']
})
export class UsersGridComponent implements OnInit, OnDestroy {

  users: UserModel[];
  usersSubscription: Subscription;

  constructor(private usersService: UsersService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.users = this.usersService.getUsers();
    this.usersSubscription = this.usersService.usersChanged.subscribe(
      (users: UserModel[]) => {
        this.users = users;
      }
    );
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }

  onEditUser(userId: number) {
    this.router.navigate([userId, 'edit'], {relativeTo: this.route});
  }

}
