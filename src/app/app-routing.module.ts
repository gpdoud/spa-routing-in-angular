import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';

import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';

import { NoDetailGuard } from './common/no-detail.guard';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' }
	,{ path: 'home', component: HomeComponent }
	,{ path: 'users/list', component: UserListComponent }
	,{ path: 'users/detail/:id', component: UserDetailComponent, canActivate: [NoDetailGuard] }
	,{ path: 'users/edit/:id', component: UserEditComponent }
	,{ path: 'about', component: AboutComponent }
	,{ path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
