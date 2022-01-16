import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }

   public generate (length: number): string  {
    const KIT ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = KIT.length;
    for ( let i = 0; i < length; i++ ) {
      result += KIT.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

}
