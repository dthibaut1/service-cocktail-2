import { Cocktail } from "./cocktail.model";


const c1 = new Cocktail('Margarita', 8.50, 'assets/images/margarita.jpg');
const c2 = new Cocktail('Daiquiri', 7.90, 'assets/images/daiquiri.jpg');
const c3 = new Cocktail('Vodka Martini', 9.20, 'assets/images/vodka-martini.jpg');


export const COCKTAILS : Cocktail[] = [c1, c2, c3];
