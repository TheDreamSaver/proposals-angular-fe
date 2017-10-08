import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomepageComponent } from './homepage/homepage.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalListComponent } from './proposal/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new.component';
import { ProposalShowComponent } from './proposal/proposal-show.component';

import { JobApplicationComponent } from './templates/job-application/job-application.component';
import { JobReferralComponent } from './templates/job-referral/job-referral.component';
import { BusinessApplicationComponent } from './templates/business-application/business-application.component';
import { AddressUpdateComponent } from './templates/address-update/address-update.component';
import { LoanApplicationComponent } from './templates/loan-application/loan-application.component';
import { ScholarshipApplicationComponent } from './templates/scholarship-application/scholarship-application.component';
import { StartupJobComponent } from './templates/startup-job/startup-job.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomepageComponent},
    { path: 'documents', component: DocumentsComponent},    
    { path: 'proposals', component: ProposalListComponent},    
    { path: 'proposals/new', component: ProposalNewComponent},
    { path: 'proposal/:id', component: ProposalShowComponent},
    { path: 'templates/job-application', component: JobApplicationComponent},
    { path: 'templates/job-referral', component: JobReferralComponent},
    { path: 'templates/business-application', component: BusinessApplicationComponent},
    { path: 'templates/address-update', component: AddressUpdateComponent},
    { path: 'templates/loan-application', component: LoanApplicationComponent},
    { path: 'templates/scholarship-application', component: ScholarshipApplicationComponent},
    { path: 'templates/startup-application', component: StartupJobComponent}
]

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}