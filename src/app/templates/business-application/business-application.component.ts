import { Component, OnInit } from '@angular/core';
import { BusinessApplication } from './businessapplication';

@Component({
  selector: 'app-business-application',
  templateUrl: './business-application.component.html',
  styleUrls: ['./business-application.component.css']
})
export class BusinessApplicationComponent implements OnInit {
  businessapplication = new BusinessApplication;

  constructor() { }

  ngOnInit() {
  }

}
