import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomepageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentService } from './documents/document.service';
import { ProposalService } from './proposal/proposal.service';
import { AuthService } from './auth.service';
import { ProposalListComponent } from './proposal/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new.component';
import { ProposalShowComponent } from './proposal/proposal-show.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';

import { IndianCurrency } from './indianCurrency.pipe';
import { JobApplicationComponent } from './templates/job-application/job-application.component';
import { JobReferralComponent } from './templates/job-referral/job-referral.component';
import { BusinessApplicationComponent } from './templates/business-application/business-application.component';
import { AddressUpdateComponent } from './templates/address-update/address-update.component';
import { LoanApplicationComponent } from './templates/loan-application/loan-application.component';
import { ScholarshipApplicationComponent } from './templates/scholarship-application/scholarship-application.component';
import { StartupJobComponent } from './templates/startup-job/startup-job.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { FlashMessagesModule } from 'angular2-flash-messages';

import { AuthGuard } from './guards/auth.guard';

export const firebaseConfig = {
  apiKey: "AIzaSyCRB1Xl7SZsi7h0-KXT8z7_O35ppPYKJmc",
  authDomain: "proposals-management-app.firebaseapp.com",
  databaseURL: "https://proposals-management-app.firebaseio.com",
  projectId: "proposals-management-app",
  storageBucket: "proposals-management-app.appspot.com",
  messagingSenderId: "885252074414"
}

@NgModule({
  declarations: [
     HomepageComponent, AppComponent, DocumentsComponent, ProposalListComponent, ProposalNewComponent, ProposalShowComponent, IndianCurrency, JobApplicationComponent, JobReferralComponent, BusinessApplicationComponent, AddressUpdateComponent, LoanApplicationComponent, ScholarshipApplicationComponent, StartupJobComponent, LoginComponent, RegisterComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, NgbModule.forRoot(), HttpModule, 
    AngularFireModule.initializeApp(firebaseConfig), 
    FlashMessagesModule
  ],
  providers: [DocumentService, ProposalService, AngularFireAuth, AngularFireDatabase, AuthService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
