import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { User } from '../../../shared/models/User';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

	users: User[];

	getUsers(): void {
		this.UserSvc.list()
			.then(resp => this.users = resp);
	}

 constructor(private UserSvc: UserService) { }

  ngOnInit() {
  	this.getUsers();
  }

}
