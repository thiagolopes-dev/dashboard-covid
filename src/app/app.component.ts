import { CovidapiService } from './service/covidapi.service';
import { Component, OnInit } from '@angular/core';
import { Covid } from './models/covid.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  covid: Covid[];

  constructor(private covidService: CovidapiService) { }

ngOnInit() {

  }

  carregarDados(){
    this.covidService.obterDados()
    .then(covid => this.covid  );
  }
}


