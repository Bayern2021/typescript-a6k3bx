import { Gegenstand } from "./gegenstand"; //von Stackblitz automat. generiert

export class Schmuck extends Gegenstand {

  constructor( id: number,  wert: number, public bezeichnung: string) {
    super(id, wert);
  }

  toString(): string {
   let text : string = super.toString();
       text+= "\n\t : bezeichnung" + this.bezeichnung;
        return text
       }
  

}