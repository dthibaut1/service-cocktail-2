import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail.model';
import { COCKTAILS } from './models/cocktails.mock';

@Injectable({
  providedIn: 'root'
})

export class CocktailService {

  constructor() { }

  getCocktails(): Cocktail[] {
    return COCKTAILS;
  }
}
