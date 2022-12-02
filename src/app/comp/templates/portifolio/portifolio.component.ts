import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ɵisObservable } from "@angular/core";
import { map, delay } from "rxjs";
import { Portifolio } from "src/app/models/portifolio.model";

@Component({
  selector: "app-portifolio",
  templateUrl: "./portifolio.component.html",
  styleUrls: ["./portifolio.component.css"],
})
export class PortifolioComponent implements OnInit {
  title = "portifolio";

  portifolios: Portifolio[] = [];
  loading = true;

  constructor(private httpCliente: HttpClient) {}

  ngOnInit(): void {
    this.getPortifolios();
  }

  getPortifolios() {
    this.httpCliente
      .get<Portifolio[]>(
        "https://portifolio-node.herokuapp.com/portifolio/findall"
      )
      .pipe(
        // delay(5000),
        map((obj) => obj)
      )

      .subscribe((ret: any) => {
        this.portifolios = ret;
        this.loading = false;
      });
  }
}
