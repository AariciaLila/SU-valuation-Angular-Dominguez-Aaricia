import { Component, OnInit } from '@angular/core';
import { Statistique } from '../model/statistique';
import { StatistiquesService } from '../services/statistiques.service';

@Component({
  selector: 'app-statistiques-list',
  templateUrl: './statistiques-list.component.html',
  styleUrls: ['./statistiques-list.component.css']
})
export class StatistiquesListComponent implements OnInit {
  statistiques!: Statistique[];

  constructor(private statistiquesService: StatistiquesService) { }

  ngOnInit(){
    this.statistiques = this.statistiquesService.statistiques;
  }

  supprimerProduit(uneStatistique : Statistique) {
    let positionStatistique = this.statistiquesService.statistiques.indexOf(uneStatistique);
    if (positionStatistique != -1) {
      this.statistiquesService.statistiques.splice(positionStatistique, 1);
    }
  }

}
