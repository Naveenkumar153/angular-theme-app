import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  imports: [
    MatButtonModule, MatIconModule
  ],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {

}
