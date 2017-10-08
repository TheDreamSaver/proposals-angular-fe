import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomepageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentService } from './documents/document.service';
import { ProposalService } from './proposal/proposal.service';
import { ProposalListComponent } from './proposal/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new.component';
import { ProposalShowComponent } from './proposal/proposal-show.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IndianCurrency } from './indianCurrency.pipe';
import { JobApplicationComponent } from './templates/job-application/job-application.component';
import { JobReferralComponent } from './templates/job-referral/job-referral.component';
import { BusinessApplicationComponent } from './templates/business-application/business-application.component';
import { AddressUpdateComponent } from './templates/address-update/address-update.component';
import { LoanApplicationComponent } from './templates/loan-application/loan-application.component';
import { ScholarshipApplicationComponent } from './templates/scholarship-application/scholarship-application.component';
import { StartupJobComponent } from './templates/startup-job/startup-job.component';

@NgModule({
  declarations: [
     HomepageComponent, AppComponent, DocumentsComponent, ProposalListComponent, ProposalNewComponent, ProposalShowComponent, IndianCurrency, JobApplicationComponent, JobReferralComponent, BusinessApplicationComponent, AddressUpdateComponent, LoanApplicationComponent, ScholarshipApplicationComponent, StartupJobComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, NgbModule.forRoot(), HttpModule
  ],
  providers: [DocumentService, ProposalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
