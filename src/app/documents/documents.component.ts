import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Document } from './document';
import { DocumentService } from './document.service';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css'],
})
export class DocumentsComponent implements OnInit {
  pageTitle: string = "Document Dashboard";
  documents: Document[];
  

  constructor(
    private documentService: DocumentService
  ) {}

  ngOnInit() {
    this.documentService.getDocuments().subscribe(documents => {
      this.documents = documents;
    });
  }
} 
