import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAjoutComponent } from './page-ajout/page-ajout.component';
import { StatistiquesListComponent } from './statistiques-list/statistiques-list.component';

const routes: Routes = [
  { path: "liste", component: StatistiquesListComponent },
  { path: "ajout", component: PageAjoutComponent },
  { path: "**", redirectTo: "liste"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
