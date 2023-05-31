import { Component, OnInit } from '@angular/core';
import { Covid } from './models/covid.model';
import { CovidapiService } from './service/covidapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  dados: Covid;
  parana = '/assets/images/parana.png';
  unopar = '/assets/images/unopar.png';

  constructor(private covidService: CovidapiService) { }

  ngOnInit() {

    this.carregarDados();

  }

  carregarDados() {
    this.covidService.obterDados()
      .then(dados => this.dados = dados);
  }
}


