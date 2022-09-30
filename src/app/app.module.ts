import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';

import { FrameComponent } from './frame/frame.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }