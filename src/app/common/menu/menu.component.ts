import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus = [
  	{ display: 'HOME', href: '/home', tip: 'Go to the home page' }
    ,{ display: "USERLIST", href: '/users/list', tip: 'User listing' }
  	,{ display: 'ABOUT', href: '/about', tip: 'Go to the about page' }
  	,{ display: 'CONTACT', href: '/contact', tip: 'Go to the contact page' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
