import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {UserModel} from '../user.model';
import {Response} from '@angular/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userId: number;
  editedUser: UserModel;
  userFormGroup: FormGroup;
  showSuccess = false;
  showError = false;
  editMode = false;


  constructor(private usersService: UsersService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.userId = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  initForm() {
    let firstName = '';
    let lastName = '';
    let middleName = '';
    let email = '';
    this.populateForm(firstName, lastName, middleName, email);
    if (this.editMode) {
      this.usersService.getUser(this.userId).subscribe(
        (resp: Response) => {
          this.editedUser = resp.json();
          firstName = this.editedUser.first_name;
          lastName = this.editedUser.last_name;
          middleName = this.editedUser.middle_name;
          email = this.editedUser.email;
          this.populateForm(firstName, lastName, middleName, email);
        }
      );
    }
  }

  populateForm(firstName: string, lastName: string, middleName: string, email: string) {
    this.userFormGroup = new FormGroup({
      firstName: new FormControl(firstName, [Validators.required]),
      lastName: new FormControl(lastName, [Validators.required]),
      middleName: new FormControl(middleName),
      email: new FormControl(email, [Validators.email]),
    });

  }

  onCancel() {
    this.router.navigate(['/users']);

  }

  onSubmit() {
    let user: UserModel;
    let userId = -1;
    if (this.editMode) {
      userId = this.editedUser.id;
    }
    user = new UserModel(
      userId,
      this.userFormGroup.value.firstName,
      this.userFormGroup.value.lastName,
      this.userFormGroup.value.email,
      this.userFormGroup.value.middleName
    );

    if (this.editMode) {
      this.usersService.updateUser(user).subscribe(
        () => {
          this.showSuccess = true;
        }, (error) => {
          this.showError = true;
          console.log(error);
        }
      );
    } else {
      this.usersService.addUser(user).subscribe(
        () => {
          this.showSuccess = true;
        }, (error) => {
          this.showError = true;
          console.log(error);
        }
      );

    }

  }

}
