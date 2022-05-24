import { Component, OnInit } from '@angular/core';
import { Statistique } from './model/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  mesStatistiques!: Statistique;
  mesAutresStatistiques!: Statistique;

  ngOnInit(){
    this.mesStatistiques = {
      identifiant: 'fa1f5f40-be3b-11eb-91ec-7f5875ecfb46',
      titre : 'Démographie en France',
      valeur: '60M'
    };
    this.mesAutresStatistiques = {
      identifiant: 'gz2g6g51-nr4n-22rn-02rv-8g6986rvgn57',
      titre : 'Démographie en Suisse',
      valeur: '8M'
    };
  }
}




