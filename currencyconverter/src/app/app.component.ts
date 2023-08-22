import { Component } from '@angular/core';
import { CurrencyapidataService } from './currencyapidata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'currencyconverter';
  currjson: any = [];

  base = 'USD';
  cont2 = 'USD';
  result:string = '1'

  changeBase(a:string){
    this.base = a;
    console.log(this.base);
  }
  toCountry(b:string){
    this.cont2 = b;
    console.log(this.cont2);
  }

  convert(){
    this.currency.getCurrencyData(this.base).subscribe(data =>{
      //console.log(data);
      this.currjson = JSON.stringify(data);
      this.currjson= JSON.parse(this.currjson)
      //console.log(this.currjson);

      if(this.cont2 =='USD'){
        this.result = this.currjson.rates.USD
      }
      
      if(this.cont2 =='EUR'){
        this.result = this.currjson.rates.EUR
      }
    });

  }
  constructor(private currency: CurrencyapidataService){

  }
}
