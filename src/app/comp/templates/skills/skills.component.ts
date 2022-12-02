import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"],
})
export class SkillsComponent implements OnInit {
  title = "skills";

  texto = [
    { item: "Java {(Spring Boot), Boas Platicas, Expressões Lambda, Streams}" },
    { item: "Angular" },
    { item: "React.js" },
    { item: "Vue.js" },
    { item: "Node.js" },
  ];

  constructor() {}

  ngOnInit(): void {}
}
