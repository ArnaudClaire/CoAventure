import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { AdventureComponent } from './block/adventure/adventure.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AdventureByBudgetByPeoplesComponent } from './adventure-by-budget-by-peoples/adventure-by-budget-by-peoples.component';
import { ActivityComponent } from './activity/activity.component';
import { RoundPipe } from './round.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    AdventureComponent,
    CalendarComponent,
    AdventureByBudgetByPeoplesComponent,
    ActivityComponent,
    RoundPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
