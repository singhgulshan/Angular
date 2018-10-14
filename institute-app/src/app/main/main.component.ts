import { Component, ViewChild, OnInit } from '@angular/core';
import { MatButton, MatSidenav, MatSidenavContainer } from '@angular/material';
import { ObservableMedia } from '@angular/flex-layout';
import { Router } from '@angular/router'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('sideNav', {read: MatSidenav}) sideNav: MatSidenav;

  navMode = 'side';
  location;

  constructor( private observableMedia: ObservableMedia, private router: Router ) {  }

  ngOnInit() {
    if (this.observableMedia.isActive('xs') || this.observableMedia.isActive('sm')) {
      this.navMode = 'over';
    }

    this.observableMedia.asObservable()
    .subscribe(change => {
      switch (change.mqAlias) {
        case 'xs':
        case 'sm':
        this.navMode = 'over';
        this.sideNav.close();
        break;
        default:
        this.navMode = 'side';
        this.sideNav.open();
        break;
      }
    });

    this.router.events.subscribe((res) => { 
      if (this.router.url == '/listinstitute') {
        this.location = 'Institute List';
      }
      else if(this.router.url == '/addinstitute'){
        this.location = 'Add Institute';
      }
      else if(this.router.url.includes('/viewinstitute')){
        this.location = 'View Institute';
      }
      else if(this.router.url.includes('/editinstitute')){
        this.location = 'Update Institute';
      }
      else{
        this.location = 'Home';
      }
    });
  }

}