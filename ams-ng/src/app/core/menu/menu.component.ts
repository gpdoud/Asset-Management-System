import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../shared/services/system.service';
import { User } from '../models/User';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

	name = "Menu Component"

	loggedInUser: User;


	menus: Menu[] = [
		new Menu("HOME", "/home", "Home menu item"),
  		new Menu("LOGIN ", "/login", "Login menu item"),
	    new Menu("USERS ", "/users", "User list"),
	    new Menu("ASSETS ", "/assets", "Asset list"),
	    new Menu("VENDORS ", "/vendors", "Vendor list"),
	  //   new Menu("RECORDS ", "/servicerecords", "Service record list"),
	  //   new Menu("DOCS/PHOTOS ", "/purchaserequests/review", "Documents and photos"),
	  //  	new Menu("LOCATIONS ", "/locations", "Locations"),
	 	// new Menu("DEPRECIATION ", "/depreciation", "Depreciation"),
	// new Menu("ABOUT", "/about", "About menu item"),
	// new Menu("CONTACT", "/contact", "Contact menu item"),
	// new Menu("HELP", "/help", "Help menu item")	
];


  constructor(private SystemSvc: SystemService) { }

  ngOnInit() {
  }

}
