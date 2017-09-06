import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
    moduleId: module.id,
    selector: 'proposal-list',
    templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
    proposalOne: Proposal = new Proposal(15,"Ashish Jha","http://ashishjha.herokuapp.com","Rails and Angular",100,120,12,"ajha@ajdreamworks.com");
    proposalTwo: Proposal = new Proposal(25,"Alex Justin Morrison","http://google.com","Rails and Angular",100,120,12,"ajha@ajdreamworks.com");
    proposalThree: Proposal = new Proposal(35,"The Dreamsaver","http://yahoo.com","Rails and Angular",100,120,12,"ajha@ajdreamworks.com");
    
    proposals: Proposal[] =[
        this.proposalOne, this.proposalTwo, this.proposalThree
    ]
}