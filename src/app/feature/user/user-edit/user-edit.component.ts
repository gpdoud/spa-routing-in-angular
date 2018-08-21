import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;

  save(): void {
  	this.usersvc.edit(this.user)
  		.subscribe(
  			res => {
  				console.log("Edit result:", res);
  				this.router.navigateByUrl("/users/list");
  			}
  		);
  }

  constructor(
  	private usersvc: UserService,
  	private route: ActivatedRoute,
  	private router: Router
  ) { }

  ngOnInit() {
  	let id = this.route.snapshot.params.id;
  	this.usersvc.get(id)
  		.subscribe(
  			res => {
  				console.log("User:", res);
  				this.user = res;
  			},
  			err => {
  				console.error(err);
  			}
  		);
  }

}
