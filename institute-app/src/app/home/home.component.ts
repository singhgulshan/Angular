import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  	let options = {
          strings: ["Add Institute.", "View Institute.", "Update Institue.","Delete Institute."],
          typeSpeed: 100,
          backSpeed: 100,
          showCursor: true,
          cursorChar: null,
          loop:true
        }

      let typed = new Typed(".typing-element", options);
  }

  }
