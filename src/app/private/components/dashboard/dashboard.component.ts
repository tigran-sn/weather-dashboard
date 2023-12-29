import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IWeatherData } from 'src/app/shared/interfaces';
import { WeatherService } from 'src/app/shared/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  weatherData!: IWeatherData;

  constructor(private router: Router, private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeatherData().subscribe((res) => {
      this.weatherData = res!;
    });
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
