import { Component, OnInit } from '@angular/core';
import { JobReferral } from './jobreferral';

@Component({
  selector: 'app-job-referral',
  templateUrl: './job-referral.component.html',
  styleUrls: ['./job-referral.component.css']
})
export class JobReferralComponent implements OnInit {

  jobreferral = new JobReferral;

  constructor() { }

  ngOnInit() {
  }

}
