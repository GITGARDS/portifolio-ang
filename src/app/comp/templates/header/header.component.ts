import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  lista = [
    { etiqueta: "inicio", link: "#inicio" },
    { etiqueta: "sobre", link: "#sobre" },
    { etiqueta: "perfil", link: "#perfil" },
    { etiqueta: "skills", link: "#skills" },
    { etiqueta: "educacao", link: "#educacao" },
    { etiqueta: "portifolio", link: "#portifolio" },
  ];

  constructor() {}

  ngOnInit(): void {}
}
