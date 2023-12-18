import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IWeatherData } from 'src/app/shared/interfaces';
import {
  Messages,
  ValidationMessages,
} from 'src/app/shared/interfaces/validation-messages.interface';
import { WeatherService } from 'src/app/shared/services';
import { StringOnlyValidator } from 'src/app/shared/validators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  form!: FormGroup;
  weatherData!: IWeatherData;
  validationMessages: ValidationMessages = {};
  errorMessage!: string;
  controls: any;
  unitsList = [
    {
      value: 'metric',
      viewValue: 'Metric',
    },
    {
      value: 'imperial',
      viewValue: 'Imperial',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private weatherService: WeatherService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getValidationMessages();
  }

  getWeather() {
    this.weatherService
      .getWeather(this.form.value.city, this.form.value.units)
      .subscribe((res: IWeatherData) => {
        this.weatherData = res;
        this.weatherService.setWeatherData(res);
        this.router.navigate(['/dashboard']);
      });
  }

  private initForm() {
    this.form = this.fb.group({
      city: ['', [Validators.required, StringOnlyValidator.validate]],
      units: ['', [Validators.required]],
    });
    this.setControls();
  }

  private getValidationMessages(): void {
    this.validationMessages.city = [
      { type: 'required', message: Messages.required },
      { type: 'stringOnly', message: Messages.stringOnly },
    ];
    this.validationMessages.units = [
      { type: 'required', message: Messages.required },
    ];
  }

  private setControls(): void {
    this.controls = {
      city: this.form.get('city') as FormControl,
      units: this.form.get('units') as FormControl,
    };
  }
}
