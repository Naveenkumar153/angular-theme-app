import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Theme } from './service/theme';
import { MatButtonModule } from '@angular/material/button';
import { Card } from './components/card/card';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, Card],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // readonly themeService = inject(Theme);
}
