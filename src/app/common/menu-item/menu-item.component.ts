import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menuitem; // { display: 'HOME', href: '/home', tip: 'Go to the home page' }

  constructor() { }

  ngOnInit() {
  }

}
