import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocumentAddComponent } from './DM/document-add/document-add.component';
import { DocumentDownloadComponent } from './DM/document-download/document-download.component';
import { DocumentListComponent } from './DM/document-list/document-list.component';

import { DocumentManagementService } from './DM/document-management.service';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    DocumentAddComponent,
    DocumentDownloadComponent,
    DocumentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
  ],
  providers: [ DocumentManagementService ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
  
}
