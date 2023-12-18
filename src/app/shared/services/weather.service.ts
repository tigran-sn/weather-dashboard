import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Unit } from '../types';
import { BehaviorSubject, Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IWeatherData } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private API_KEY = environment.apiKey;
  private weatherData = new BehaviorSubject<IWeatherData | null>(null);

  // public weatherData$ = new Subject<IWeatherData | null>();

  constructor(private http: HttpClient) {}

  public getWeather(city: string, units: Unit): Observable<IWeatherData> {
    return this.http
      .get<IWeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.API_KEY}&units=${units}`
      )
      .pipe(catchError(this.handleError));
  }

  public setWeatherData(data: IWeatherData) {
    this.weatherData.next(data);
  }

  public getWeatherData(): Observable<IWeatherData | null> {
    return this.weatherData.asObservable();
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.message}`;
    }
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
