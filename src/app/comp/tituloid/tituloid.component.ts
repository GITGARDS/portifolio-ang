import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tituloid',
  templateUrl: './tituloid.component.html',
  styleUrls: ['./tituloid.component.css']
})
export class TituloidComponent implements OnInit {

  @Input() texto = "titulo";

  constructor() { }

  ngOnInit(): void {
  }

}
