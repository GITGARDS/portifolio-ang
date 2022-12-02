import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sobre",
  templateUrl: "./sobre.component.html",
  styleUrls: ["./sobre.component.css"],
})
export class SobreComponent implements OnInit {
  title = "sobre";

  texto =
    "Determinação para gerenciar e resolver problemas, boa comunicação, vontade aprender, conhecimento adquirido foi pesquisando na internet e alguns cursos particulares, procuro ser claro e objetivo.";

  constructor() {}

  ngOnInit(): void {}
}
