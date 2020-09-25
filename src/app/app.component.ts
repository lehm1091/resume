import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myresume';
  isCollapsed = true;
  name = "Luis";
  lastName = "Hernández";
  address = "Condominios Santa Lucia edif 26 apt 12, Santa Ana";
  number = "(503) 7659 3328"
  email = "lehm1091@gmail.com"
  introduction = "Ingeniero de sistemas informáticos con experiencia previa como instructor de cursos técnicos de programación, y soporte técnico. Me apasiona la tecnología y el ambiente de desarrollo Full Stack. Y además tengo mucho interés en poder aportar mis habilidades a su empresa, por lo que estoy en la disposición de seguir mejorando y desarrollando mis conocimientos y aptitudes.";
}
