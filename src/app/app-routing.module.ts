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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' ,  canActivate:[AuthGuard]},
    { path: 'home', component: HomepageComponent,  canActivate:[AuthGuard]},
    { path: 'documents', component: DocumentsComponent,  canActivate:[AuthGuard]},    
    { path: 'proposals', component: ProposalListComponent,  canActivate:[AuthGuard]},    
    { path: 'proposals/new', component: ProposalNewComponent,  canActivate:[AuthGuard]},
    { path: 'proposal/:id', component: ProposalShowComponent,  canActivate:[AuthGuard]},
    { path: 'templates/job-application', component: JobApplicationComponent,  canActivate:[AuthGuard]},
    { path: 'templates/job-referral', component: JobReferralComponent,  canActivate:[AuthGuard]},
    { path: 'templates/business-application', component: BusinessApplicationComponent,canActivate:[AuthGuard]},
    { path: 'templates/address-update', component: AddressUpdateComponent,  canActivate:[AuthGuard]},
    { path: 'templates/loan-application', component: LoanApplicationComponent,  canActivate:[AuthGuard]},
    { path: 'templates/scholarship-application', component: ScholarshipApplicationComponent,  canActivate:[AuthGuard]},
    { path: 'templates/startup-application', component: StartupJobComponent,  canActivate:[AuthGuard]},
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
    { path: '**', component:PageNotFoundComponent}
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