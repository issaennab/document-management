import { Component, OnInit, Input, Output } from '@angular/core';

import { Document } from '../../DM/document';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  @Input() record: Document;

  columnDefs = [
    { headerName: 'Document ID', field: 'documentID',  sortable: true, editable: true, filter: 'agNumberColumnFilter' },
    { headerName: 'Document Name', field: 'docuemntName', sortable: true, editable: true, filter: 'agTextColumnFilter', columnGroupShow: 'open' },
    { headerName: 'Document Type', field: 'documentType', sortable: true, editable: true, filter: 'agTextColumnFilter' }
  ];

  documentList: Document[] = [
    { documentID: 800, docuemntName: "Doc1", documentType: 'pdf' },
    { documentID: 805, docuemntName: "Doc2", documentType: 'word' }
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.record);
    this.documentList.push(this.record);
  }

  selectedDocument: Document;

  onSelect(document: Document): void {
    this.selectedDocument = document;
    console.log(this.selectedDocument)
    this.documentList.push(document);
  }

  onRemove(document: Document): void {
    this.selectedDocument = document;
    this.documentList.splice(this.documentList.indexOf(document), 1);
  }

  onDownload(document: Document): void {
    console.log("file has been downloaded");
  }

}
