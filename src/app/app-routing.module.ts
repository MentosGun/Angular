import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './user-list/user-list.component';
import {UserViewComponent} from './user-view/user-view.component';

const routes: Routes = [
    {
        path: '', component: UserListComponent,
    },
    {
        path: 'user/:id', component: UserViewComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
