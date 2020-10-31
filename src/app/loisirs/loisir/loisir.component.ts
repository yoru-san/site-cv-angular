import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loisir',
  templateUrl: './loisir.component.html',
  styleUrls: ['./loisir.component.scss']
})
export class LoisirComponent implements OnInit {
  @Input() nom: string;
  @Input() img: string;

  constructor() { }

  ngOnInit(): void {
  }

}
