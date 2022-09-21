import { Injectable } from '@angular/core';
import {MainService} from "./main.service";
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends MainService {

  API_PATH_MODULE_USER = this.APP_PATH_V1 + '/user';

  constructor(httpClient: HttpClient, private userSession: SessionService) {
    super(httpClient);
  }

  getUser() {
    return this.httpClient.get(this.APP_BASE_URL + this.API_PATH_MODULE_USER ,  {})
      .pipe(map((response: any) => {
        return response;
      }))
      .pipe(catchError( this.handleError));
  }


  logout() {
    this.userSession.clearSessionStorage();
    if (window.location.host === 'localhost:4200') {
      window.location.href = this.APP_BASE_URL_LOCAL_HOST + '/logout';
    } else {
      window.location.href = this.APP_BASE_URL + '/logout';
    }
  }

  loginPage() {
    if (window.location.host === 'localhost:4200') {
      window.location.href = this.APP_BASE_URL_LOCAL_HOST + '/login';
    } else {
      window.location.href = this.APP_BASE_URL + '/login';
    }
  }
}
