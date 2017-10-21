import {NgModule} from '@angular/core';
import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './users.component';
import {CommonModule} from '@angular/common';
import {UsersGridComponent} from './users-grid/users-grid.component';
import {UsersService} from './users.service';
import {SharedModule} from '../shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UserEditComponent } from './user-edit/user-edit.component';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    UsersComponent,
    UsersGridComponent,
    UserEditComponent,

  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule,
    HttpModule
  ],
  providers: [UsersService]
})
export class UsersModule {

}
