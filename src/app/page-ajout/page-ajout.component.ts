import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { StatistiqueBack } from '../model/apiTypes';
import { Statistique } from '../model/statistique';
import { StatistiquesService } from '../services/statistiques.service';

@Component({
  selector: 'app-page-ajout',
  templateUrl: './page-ajout.component.html',
  styleUrls: ['./page-ajout.component.css']
})
export class PageAjoutComponent implements OnInit {
  identifiant!: string;
  titre! : string;
  valeur! : string;

  @ViewChild('mySwal')
  public readonly mySwal!: SwalComponent;

  constructor(public statistiquesService : StatistiquesService, private router : Router) { }

  ngOnInit(): void {
  }

  ajouterStatistique() {
    let nouvelleStatistique : Statistique = {
      identifiant: this.identifiant,
      titre: this.titre,
      valeur: this.valeur
    };

    this.statistiquesService.tabStatistiques.push(nouvelleStatistique);
    this.mySwal.fire().then(() => {
      this.router.navigateByUrl("liste");
    });

}
}
