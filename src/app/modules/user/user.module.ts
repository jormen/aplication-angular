import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UserDetailComponent } from './user-detail/user-detail.component';



@NgModule({
  declarations: [
    UserDetailComponent,
    UserListComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
