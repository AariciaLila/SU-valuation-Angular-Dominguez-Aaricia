import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StatistiqueBack } from '../model/apiTypes';
import { Statistique } from '../model/statistique';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
  @Input() statistique!: Statistique;
  @Output() demandeSuppression : EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDeleteStat(){
    this.demandeSuppression.emit();
  }

}
