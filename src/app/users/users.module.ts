import {NgModule} from '@angular/core';
import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './users.component';
import {CommonModule} from '@angular/common';
import {UsersGridComponent} from './users-grid/users-grid.component';
import {UsersService} from './users.service';
import {SharedModule} from '../shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    UsersComponent,
    UsersGridComponent,

  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    NgbModule
  ],
  providers: [UsersService]
})
export class UsersModule {

}
