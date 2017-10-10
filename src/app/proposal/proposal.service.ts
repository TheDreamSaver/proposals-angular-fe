import { Proposal } from './proposal';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs';

@Injectable()
export class ProposalService {
  proposals: FirebaseListObservable<any[]>;
  proposal: FirebaseObjectObservable<any>;

  constructor(
    public af:AngularFireDatabase
  ) { 
    this.proposals = this.af.list('/proposals') as FirebaseListObservable<Proposal[]>;
  }

  getProposals(){
    return this.proposals;
  }

  newProposal(proposal:Proposal){
    this.proposals.push(proposal);
  }

  getProposal(id:string){
    this.proposal = this.af.object('/proposals/'+id) as FirebaseObjectObservable<Proposal>;
    return this.proposal;
  }

  deleteProposal(id:string){
    return this.proposals.remove(id);
  }
}