import {Injectable} from '@angular/core';
import {UserModel} from './user.model';
import {Http, Response} from '@angular/http';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class UsersService {
  usersEndPoint = 'http://localhost:8000/users/';
  usersChanged = new Subject<UserModel[]>();

  constructor(private http: Http) {
  }

  private users: UserModel[];

  getUsers() {
    this.http.get(this.usersEndPoint).subscribe(
      (response: Response) => {
        this.users = response.json();
        this.usersChanged.next(this.users);
      }
    );
    return this.users;
  }

  getUser(id: number) {
    return this.http.get(this.usersEndPoint + id + '/');
  }

}
