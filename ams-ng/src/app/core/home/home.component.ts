import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SystemService } from '../../shared/services/system.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private SystemSvc: SystemService, private router: Router) { }

  ngOnInit() { 
  	// if(!this.SystemSvc.isLoggedIn()) {
  	// 	this.router.navigateByUrl("/login");
  	}
  	// this.loggedInUser = this.SystemSvc.getLoggedIn();
  }

