import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './_shared/header/header.component';
import { SideBarComponent } from './_shared/side-bar/side-bar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { DocumentComponent } from './pdf/document/document.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    DashboardComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    NgxExtendedPdfViewerModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    TabsModule.forRoot(),
    NgxDaterangepickerMd.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
