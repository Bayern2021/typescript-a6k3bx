// Import stylesheets
import './style.css';
import { Aktie } from './aktie';
import { Schmuck } from './schmuck';
import { Tresor } from './tresor';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = '<h1>Für Ausgabe der Tresor-Typescript-App die Konsole öffnen!</h1>';


let a1: Aktie =   new Aktie(1, 97.88, 'BASF', 50.0);
let s1: Schmuck = new Schmuck(2,10.5,"Uhr");
let t1: Tresor =  new Tresor();



//todo: Ergänzungen lt. Aufgabenstellung

/**
 * Beispiel für try-catch mit dem Werfen des Errors
 */
try {
  //todo
} catch (error) {
  console.log(error.name + ":\t" + error.message);
}
