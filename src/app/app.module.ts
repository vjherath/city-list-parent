import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityListComponent } from './view/city-list/city-list.component';
import { AppLayoutComponent } from './shared/app-layout/app-layout.component';
import { CityUpdateComponent } from './view/city-update/city-update.component';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SafeUrlPipe } from './pipes/SafeUrlPipe';
import { AddCityComponent } from './view/add-city/add-city.component';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    AppLayoutComponent,
    CityUpdateComponent,
    SafeUrlPipe,
    AddCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressBarModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatListModule,
    MatExpansionModule,
    FormsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
