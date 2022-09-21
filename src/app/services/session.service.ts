import {Inject, Injectable} from '@angular/core';
import { SESSION_STORAGE, WebStorageService } from 'ngx-webstorage-service';
import { UserSession } from '../data/user-session';

const USERLOGINSESSION = 'userloginsession';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(@Inject(SESSION_STORAGE) private sessionStorage: WebStorageService) { }

  public setUserSession(userSession: UserSession) {
    this.sessionStorage.set(USERLOGINSESSION, JSON.stringify(userSession));
  }

  public getUserSession(): UserSession {
    return JSON.parse(this.sessionStorage.get(USERLOGINSESSION));
  }

  public clearUserSession() {
    this.sessionStorage.remove(this.sessionStorage.get(USERLOGINSESSION));
  }

  public clearSessionStorage() {
    this.sessionStorage.clear();
  }
}
