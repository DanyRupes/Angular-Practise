import { Component, OnInit, NgModule } from '@angular/core';
import {FlexLayoutModule  } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule, FlexLayoutModule ],
})

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Ready for requests. ")
  }

  titles = ['Men', 'Women', 'Prices', 'ContactUs']
  
}

