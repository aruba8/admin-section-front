import {Injectable} from '@angular/core';
import {UserModel} from './user.model';
@Injectable()
export class UsersService {

  private users: UserModel[] = [
    new UserModel('Erik', 'Test', 'test@test.ca'),
    new UserModel('Tom', 'Test', 'test@test.ca'),
    new UserModel('John', 'Test', 'test@test.ca'),
    new UserModel('Bill', 'Test', 'test@test.ca'),
  ];

  getUsers() {
    return this.users;
  }

}
