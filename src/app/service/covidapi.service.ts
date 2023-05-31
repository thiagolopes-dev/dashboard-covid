
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Covid } from '../models/covid.model';

@Injectable({
  providedIn: 'root'
})
export class CovidapiService {

  apiUrl: string;

  constructor(private http: HttpClient) {

    this.apiUrl = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/pr`;
  }

  obterDados(): Promise<Covid> {
    return firstValueFrom(
      this.http.get(`${this.apiUrl}`)
    )
      .then(response => response as Covid);
  }

}
