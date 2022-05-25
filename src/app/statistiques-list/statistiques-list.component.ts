import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Statistique } from '../model/statistique';
import { StatistiquesService } from '../services/statistiques.service';

@Component({
  selector: 'app-statistiques-list',
  templateUrl: './statistiques-list.component.html',
  styleUrls: ['./statistiques-list.component.css']
})
export class StatistiquesListComponent implements OnInit {
  public statistiquesService : StatistiquesService;

  constructor(statistiquesService: StatistiquesService) {this.statistiquesService = statistiquesService }

  ngOnInit(){}

  supprimerProduit(uneStatistique : Statistique) {
    let positionStatistique = this.statistiquesService.tabStatistiques.indexOf(uneStatistique);
    if (positionStatistique != -1) {
      this.statistiquesService.tabStatistiques.splice(positionStatistique, 1);
    }
  }

}
