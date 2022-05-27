import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { StatistiquesListComponent } from './statistiques-list/statistiques-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { PageAjoutComponent } from './page-ajout/page-ajout.component';

@NgModule({
  declarations: [
    AppComponent,
    StatistiquesComponent,
    StatistiquesListComponent,
    HeaderComponent,
    PageAjoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
