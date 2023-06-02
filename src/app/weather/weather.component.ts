import { Component, Input } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  weatherData: any;


  constructor(private weatherService: WeatherService) { }

  @Input() city: string = '';
  ngOnInit(): void {
    this.getWeather('Pignan');
  }

  getWeather(city: string) {
    const apiKey = "2baf86125d4e537d1805f62c6d72fb9c";
    this.weatherService.getWeather(city, apiKey)
      .subscribe(data => {
        this.weatherData = data;
        console.log(this.weatherData);
      });
  }
}
