import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {

  characters: any[] = [];
  searchName: string = '';

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.characterService.getCharacters(this.searchName).subscribe({
      next: (data) => {
        this.characters = data.results;
      },
      error: (err) => {
        console.error("Error API:", err);
      }
    });
  }
}
