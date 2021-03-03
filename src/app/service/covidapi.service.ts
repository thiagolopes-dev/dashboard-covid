
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidapiService {

  apiUrl: string;

  constructor(private http: HttpClient) {

    this.apiUrl = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/pr`;
   }


    obterDados(){
      return this.http.get(`${this.apiUrl}`)
      .toPromise()
      .then( response => response);
    }

}
