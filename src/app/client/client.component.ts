import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  folders = [
    { name: "Contrats clients grand public", showMenu: false },
    { name: "Contrats clients entreprise", showMenu: false },
    { name: "Contrats clients Orange money", showMenu: false },
    { name: "Autres contrats clients", showMenu: false }
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
