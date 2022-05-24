import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { StatistiquesListComponent } from './statistiques-list/statistiques-list.component';

@NgModule({
  declarations: [
    AppComponent,
    StatistiquesComponent,
    StatistiquesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
