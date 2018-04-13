import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  show:any = {search:false, menu:false}
  constructor() { }

  ngOnInit() {
  }

  toggleSearch(){
    this.show.search = !this.show.search;
  }

  toggleMenu(){
    this.show.menu = !this.show.menu;
  }

}
