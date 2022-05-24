import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Statistique } from '../model/statistique';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
  @Input() statistique!: Statistique;
  @Output() demandeSuppression : EventEmitter<void> = new EventEmitter();

  identifiant!: string;
  titre!: string;
  valeur!: string

  constructor() { }

  ngOnInit(): void {}

  onDeleteStat(){
    this.demandeSuppression.emit();
  }

}
