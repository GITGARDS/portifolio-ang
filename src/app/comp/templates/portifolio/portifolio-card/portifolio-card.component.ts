import { Component, Input, OnInit } from "@angular/core";
import { Portifolio } from "src/app/models/portifolio.model";

@Component({
  selector: "app-portifolio-card",
  templateUrl: "./portifolio-card.component.html",
  styleUrls: ["./portifolio-card.component.css"],
})
export class PortifolioCardComponent implements OnInit {
  @Input() item: Portifolio = new Portifolio();

  constructor() {}

  ngOnInit(): void {}
}
