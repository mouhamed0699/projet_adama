import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebareComponent } from './sidebare/sidebare.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SidebareComponent,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projet_adama';
  searchTerm = '';
  showAddPopup = false;

  showPopup() {
    this.showAddPopup = true;
    console.log(this.showAddPopup)
  }

  closePopup() {
    this.showAddPopup = false;
  }

  addFile() {
    console.log('Ajouter un fichier');
  }

  addFolder() {
    console.log('Créer un dossier');
  }

  search() {
    console.log('Recherche:', this.searchTerm);
  }
}
