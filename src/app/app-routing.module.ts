import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCityComponent } from './view/add-city/add-city.component';
import { CityListComponent } from './view/city-list/city-list.component';

const routes: Routes = [
  {path: 'city-list', component: CityListComponent},
  {path: 'city-upload', component: AddCityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
