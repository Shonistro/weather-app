import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from './weather';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }


  private apiUrl = 'https://api.openweathermap.org/data/2.5/';
  private apiKey = "cffe7e92408d084112b5e1770c39acc0"


  getWeather(city: string): Observable<Weather>{
    const option = new HttpParams()
   .set('q', city)
   .set('units', 'metric')
   .set('appId',  this.apiKey)
 
    return this.http.get<Weather>(this.apiUrl + 'weather', {params: option});

  }
}
