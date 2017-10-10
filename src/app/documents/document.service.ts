import { Document } from './document';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Observable } from 'rxjs';

@Injectable()
export class DocumentService {
  documents: FirebaseListObservable<any[]>;
  document: FirebaseObjectObservable<any>;

  constructor(
    public af:AngularFireDatabase
  ) { 
    this.documents = this.af.list('/documents') as FirebaseListObservable<Document[]>;
  }

  getDocuments(){
    return this.documents;
  }
}