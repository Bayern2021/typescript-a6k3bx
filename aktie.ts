

export class aktie extends Gegenstand {

  constructor(id: number,  wert: number, public unternehmen: string, public nennwert: number ){
    super(id,wert);
  }
   
  toString(): string {
    let text : string = super.toString();
        text+= "\n\t : Unternehmen" + this.unternehmen;
        text+= "\n\t : Nennwert" + this.nennwert;
         return text
        }
  
