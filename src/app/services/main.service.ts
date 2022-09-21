import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  APP_BASE_URL = 'http://localhost:8080';
  APP_PATH =  '/api';
  APP_PATH_V1 =  this.APP_PATH + '/v1';

  APP_BASE_URL_LOCAL_HOST = 'http://localhost:8080';
  

  constructor(public httpClient: HttpClient) {
    this.httpClient = httpClient;
    if (window.location.hostname === 'localhost') {
      // this.APP_BASE_URL = '';
    } else {
      this.APP_BASE_URL = window.location.origin;
      console.log(this.APP_BASE_URL);
    }
  }

  public handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
      return '0';
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

}
