import { Component, OnInit } from '@angular/core';
import { JobApplication } from './jobapplication';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css']
})
export class JobApplicationComponent implements OnInit {

  jobapplication = new JobApplication;

  constructor() { }

  ngOnInit() {
  }

}
