import { Component, OnInit } from '@angular/core';
import { ScholarshipApplication } from './scholarshipapplication';

@Component({
  selector: 'app-scholarship-application',
  templateUrl: './scholarship-application.component.html',
  styleUrls: ['./scholarship-application.component.css']
})
export class ScholarshipApplicationComponent implements OnInit {

  scholarshipapplication = new ScholarshipApplication;

  constructor() { }

  ngOnInit() {
  }

}
