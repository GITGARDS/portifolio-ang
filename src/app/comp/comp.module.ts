import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./templates/header/header.component";
import { FooterComponent } from "./templates/footer/footer.component";
import { InicioComponent } from "./templates/inicio/inicio.component";
import { SobreComponent } from "./templates/sobre/sobre.component";
import { PortifolioComponent } from "./templates/portifolio/portifolio.component";
import { TitleComponent } from './title/title.component';
import { PerfilComponent } from './templates/perfil/perfil.component';
import { SkillsComponent } from './templates/skills/skills.component';
import { TituloidComponent } from "./tituloid/tituloid.component";
import { HttpClientModule } from "@angular/common/http";
import { PortifolioCardComponent } from './templates/portifolio/portifolio-card/portifolio-card.component';
import { EducacaoComponent } from './templates/educacao/educacao.component';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    SobreComponent,
    PortifolioComponent,
    TitleComponent,
    PerfilComponent,
    SkillsComponent,
    TituloidComponent,
    PortifolioCardComponent,
    EducacaoComponent
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    PortifolioComponent,
    SobreComponent,
    TitleComponent,
    PerfilComponent,
    SkillsComponent,
    TituloidComponent,
    EducacaoComponent
  ],
})
export class CompModule {}
