import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-achat',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './achat.component.html',
  styleUrl: './achat.component.css'
})
export class AchatComponent {
  folders = [
    { name: "Achats généraux", showMenu: false },
    { name: "Achats réseau et systèmes d’informations", showMenu: false },
    { name: "Achats intégration", showMenu: false },
    { name: "Achat réseau mobile", showMenu: false },
    { name: "Autres achats", showMenu: false },
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
