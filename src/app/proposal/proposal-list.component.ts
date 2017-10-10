import { Component, OnInit } from '@angular/core';
import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})
export class ProposalListComponent implements OnInit {
  proposals: Proposal[];

  constructor(
    private proposalService: ProposalService,
    private router: Router 
  ) {}

  ngOnInit() {
    this.proposalService.getProposals().subscribe(proposals => {
      this.proposals = proposals;
    });
  }

  goToShow(proposal: Proposal): void {
    let link = ['/proposal', proposal.$key];
    this.router.navigate(link);
  }
}