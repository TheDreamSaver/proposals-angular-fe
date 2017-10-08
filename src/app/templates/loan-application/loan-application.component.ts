import { Component, OnInit } from '@angular/core';
import { LoanApplication } from './loanapplication';

@Component({
  selector: 'app-loan-application',
  templateUrl: './loan-application.component.html',
  styleUrls: ['./loan-application.component.css']
})
export class LoanApplicationComponent implements OnInit {

  loanapplication = new LoanApplication;

  constructor() { }

  ngOnInit() {
  }

}
