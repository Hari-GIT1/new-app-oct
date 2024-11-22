import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MyntraComponent } from './myntra/myntra.component';
import { BankaccountComponent } from './bankaccount/bankaccount.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { WeatherComponent } from './weather/weather.component';
import { BlogComponent } from './blog/blog.component';
import { IMDBComponent } from './imdb/imdb.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { SocialComponent } from './social/social.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateBankComponent } from './create-bank/create-bank.component';
import { StudentsComponent } from './students/students.component';
import { CreateStudentsIDComponent } from './create-students-id/create-students-id.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    VehicleComponent,
    MyntraComponent,
    BankaccountComponent,
    PinterestComponent,
    WeatherComponent,
    BlogComponent,
    IMDBComponent,
    PokemonComponent,
    SocialComponent,
    CreateVehicleComponent,
    CreateBankComponent,
    StudentsComponent,
    CreateStudentsIDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
