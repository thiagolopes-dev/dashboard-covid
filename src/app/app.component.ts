import { CovidapiService } from './service/covidapi.service';
import { Component, OnInit } from '@angular/core';
import { Covid } from './models/covid.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  dados: Covid;
  logo: any = '/assets/images/parana.png';
  unopar: any = '/assets/images/unopar.png';

  constructor(private covidService: CovidapiService) { }

ngOnInit() {

  this.carregarDados();

  }

  carregarDados(){
    this.covidService.obterDados()
    .then(dados => this.dados = dados );
  }
}


