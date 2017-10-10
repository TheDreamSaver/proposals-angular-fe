import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'proposal-new',
  templateUrl: 'proposal-new.component.html',
  styleUrls: ['proposal-new.component.css'],
  providers: [ ProposalService]
})
export class ProposalNewComponent {
  proposal = new Proposal;
  submitted: boolean = false;

  constructor(
    private proposalService: ProposalService,
    public router:Router,
  ) {}

  onSubmit({value, valid}:{value:Proposal, valid:boolean}){
    if(!valid){
      this.router.navigate(['proposal-new']);
    } else {
      // Add new proposal
      this.submitted = true;
      this.proposalService.newProposal(value);
    }
  }
}