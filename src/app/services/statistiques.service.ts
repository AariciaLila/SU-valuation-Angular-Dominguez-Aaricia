import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StatistiqueBack } from '../model/apiTypes';
import { Statistique } from '../model/statistique';

@Injectable({
  providedIn: 'root'
})
export class StatistiquesService {
  public tabStatistiques : Statistique[] = [];

  constructor(private http : HttpClient) {
    this.http.get<StatistiqueBack[]>("https://stats.naminilamy.fr/").subscribe(
      res => {
        for (const statistique of res) {
          this.tabStatistiques.push({
            identifiant: statistique.id,
            titre: statistique.title,
            valeur: statistique.value
          });
        }
      }
    );
   }
  
}