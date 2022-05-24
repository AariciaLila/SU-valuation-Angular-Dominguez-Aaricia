import { Component, Input, OnInit } from '@angular/core';
import { Statistique } from '../model/statistique';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
  @Input() statistique!: Statistique;

  identifiant!: string;
  titre!: string;
  valeur!: string

  constructor() { }

  ngOnInit(): void {}

}
