import { Injectable } from '@angular/core';
import {MainService} from "./main.service";
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import { CityListRequest } from '../data/city-list-request';
import { City } from '../data/city';

@Injectable({
  providedIn: 'root'
})
export class CityListService extends MainService {

  API_PATH_MODULE_CITIES = this.APP_PATH_V1 + '/city';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }

  
  getAllCities(request: CityListRequest) {
    const cityListRequest = {page: request.page, size: request.size,  searchText: request.searchText};
    return this.httpClient.post(this.APP_BASE_URL + this.API_PATH_MODULE_CITIES + '/list', cityListRequest )
      .pipe(map((response: any) => {
        return response;
      }))
      .pipe(catchError( this.handleError));
  }

  updateCity(city: City, selectedFileFormData: FormData | undefined) {
    return this.httpClient.put(this.APP_BASE_URL + this.API_PATH_MODULE_CITIES + '/' + city.id  , selectedFileFormData)
      .pipe(map((response: any) => {
        return response;
      }))
      .pipe(catchError( this.handleError));

  }

  uploadCity(selectedFileFormData: FormData | undefined) {
    return this.httpClient.post(this.APP_BASE_URL + this.API_PATH_MODULE_CITIES + '/upload'  , selectedFileFormData)
      .pipe(map((response: any) => {
        return response;
      }))
      .pipe(catchError( this.handleError));

  }
  
}
