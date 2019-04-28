import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Document } from '../document';

@Component({
  selector: 'app-document-add',
  templateUrl: './document-add.component.html',
  styleUrls: ['./document-add.component.css']
})
export class DocumentAddComponent implements OnInit {

  flat: boolean = false;
  showDocumentSection: boolean = false;

  @Input() document: Document;

  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      document_name: ['', Validators.required],
      docuemnt_Id: ['', Validators.required],
      document_type: ['', Validators.required]
    });
  }

  onSubmit(event) {
    
    this.document = new Document();
    this.document.docuemntName = event.document_name;
    this.document.documentType = event.document_type;
    this.document.documentID = event.docuemnt_Id;

    this.showDocumentSection = true;
  }

  ngOnInit() {
    
  }

}
