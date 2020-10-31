import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  public details: string[] = [
    "21 ans",
    "Etudiante à Ynov Toulouse",
    "Employée chez Chausson Matériaux"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
