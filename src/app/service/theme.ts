import { computed, DOCUMENT, effect, inject, Injectable, signal } from '@angular/core';
import { THEME_COLORS } from '../models/theme-schme.model';
import { THEME_SCHEMES } from '../models/theme-color.model';

@Injectable({
  providedIn: 'root',
})
export class Theme {

  private readonly document = inject(DOCUMENT);
  readonly possibleColors = THEME_COLORS;
  readonly possibleSchemes = THEME_SCHEMES;

  private readonly selectedColor = signal(this.possibleColors[0]);
  private readonly selectedScheme = signal(this.possibleSchemes[0]);

  readonly color = this.selectedColor.asReadonly();
  readonly scheme = this.selectedScheme.asReadonly();

  private readonly primaryColor = computed(() => this.selectedColor().primary);
  private readonly accentColor = computed(() => this.selectedColor().accent);
  private readonly schemeValue = computed(() => this.selectedScheme().value);

  constructor() {
    effect(() => {
      this.document.body.style.setProperty('--theme-primary', this.primaryColor());
    });

    effect(() => {
      this.document.body.style.setProperty('--theme-accent', this.accentColor());
    });

    effect(() => {     
      this.document.body.style.setProperty('color-scheme', this.schemeValue());
    });
  }

  setColor(color: string) {
    const selected = this.possibleColors.find((c) => c.name === color);
    if (selected) {
      this.selectedColor.set(selected);
    }
  }

  setScheme(scheme: string) {
    const selected = this.possibleSchemes.find((s) => s.name === scheme);
    if (selected) {
      this.selectedScheme.set(selected);
    }
  } 

  

  
}
