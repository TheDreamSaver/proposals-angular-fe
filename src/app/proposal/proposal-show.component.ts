import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';

@Component({
    moduleId: module.id,
    selector: 'proposal-show',
    templateUrl: 'proposal-show.component.html',
    styleUrls: ['proposal-show.component.css']
})
export class ProposalShowComponent implements OnInit {
    id:string;
    proposal: Proposal;
  
    constructor(
      public proposalService:ProposalService,
      public router:Router,
      public route:ActivatedRoute,
      public flashMessagesService:FlashMessagesService
    ) { }
  
    ngOnInit() {
      // Get ID
      this.id = this.route.snapshot.params['id'];
  
      // Get Proposal
      this.proposalService.getProposal(this.id).subscribe(proposal => {
        this.proposal = proposal;
      });
    }

    onDeleteClick(){
        if(confirm("Are you sure to delete?")){
          this.proposalService.deleteProposal(this.id);
          this.flashMessagesService.show('Proposal Deleted', { cssClass: 'alert-success', timeout: 4000 });
          this.router.navigate(['/proposals']);
        }
      }
}