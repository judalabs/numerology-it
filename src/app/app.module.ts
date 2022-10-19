import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableResultComponent } from './components/table-result/table-result.component';
import { SingleResultComponent } from './components/single-result/single-result.component';

@NgModule({
  declarations: [
    AppComponent,
    TableResultComponent,
    SingleResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
