import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loisirs',
  templateUrl: './loisirs.component.html',
  styleUrls: ['./loisirs.component.scss']
})
export class LoisirsComponent implements OnInit {

  public loisirs = [
    {
      nom: "L'équitation",
      img: "//images.lpcdn.ca/924x615/201608/24/1250631-poney-clubs-ecoles-equitation-autres.jpg"
    }, {
      nom: "L'escalade",
      img: "//www.slate.fr/sites/default/files/styles/1680x840/public/escalade.jpg"
    }, {
      nom: "La lecture",
      img: "//france3-regions.francetvinfo.fr/image/qKSRhbJH9Rj-agcqIEqXTjFlQeE/1200x900/regions/2020/06/09/5edf6e0648d98_nuit_de_la_lecture-4042071.jpg"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
