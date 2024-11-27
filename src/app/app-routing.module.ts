import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { MyntraComponent } from './myntra/myntra.component';
import { PinterestComponent } from './pinterest/pinterest.component';
import { WeatherComponent } from './weather/weather.component';
import { BlogComponent } from './blog/blog.component';
import { IMDBComponent } from './imdb/imdb.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { SocialComponent } from './social/social.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateBankComponent } from './create-bank/create-bank.component';
import { StudentsComponent } from './students/students.component';
import { CreateStudentsIDComponent } from './create-students-id/create-students-id.component';
import { TODOComponent } from './to-do/to-do.component';
import { BankaccountComponent } from './bankaccount/bankaccount.component';
import { CresteUserComponent } from './creste-user/creste-user.component';
import { ValidationTaskComponent } from './validation-task/validation-task.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'product',component:MyntraComponent},
    {path:'bank',component:BankaccountComponent},
    {path:'pinterest',component:PinterestComponent},
    {path:"weather",component:WeatherComponent},
    {path:"blog",component:BlogComponent},
    {path:"imdb",component:IMDBComponent},
    {path:"pokemon",component:PokemonComponent},
    {path:"social",component:SocialComponent},
    {path:'createvehicle',component:CreateVehicleComponent},
    {path:'createbank',component:CreateBankComponent},
    {path:'student',component:StudentsComponent},
    {path:"createstudent",component:CreateStudentsIDComponent},
    {path:"todo",component:TODOComponent},
    {path:"creste",component:CresteUserComponent},
    {path:'v-task',component:ValidationTaskComponent},
    
  ]},
  {path:'',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
