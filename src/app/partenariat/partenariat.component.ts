import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-partenariat',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './partenariat.component.html',
  styleUrl: './partenariat.component.css'
})
export class PartenariatComponent {
  folders = [
    { name: "Partenariat Orange Money", showMenu: false },
    { name: "Partenariat opérateurs internationaux", showMenu: false },
    { name: "Sponsoring", showMenu: false },
    { name: "Mécénat", showMenu: false },
    { name: "Distribution", showMenu: false },
    { name: "Contenus", showMenu: false },
    { name: "Partenariats divers", showMenu: false },
  ];
  toggleMenu(folder: any) {
    folder.showMenu = !folder.showMenu;
    console.log(folder.showMenu)
  }

  modifyFolder(folder: any) {
    console.log('Modifier dossier:', folder.name);
  }

  deleteFolder(folder: any) {
    console.log('Supprimer dossier:', folder.name);
  }
}
