import { Component, OnInit } from '@angular/core';
import { StartUpJob } from './startupjob';
@Component({
  selector: 'app-startup-job',
  templateUrl: './startup-job.component.html',
  styleUrls: ['./startup-job.component.css']
})
export class StartupJobComponent implements OnInit {

  startupjob = new StartUpJob;

  constructor() { }

  ngOnInit() {
  }

}
