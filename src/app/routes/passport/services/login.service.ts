import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = 'backstage/user';
  constructor(
    private api: ApiService
  ) { }
  login(params): Observable<any> {
    return this.api.post(this.apiUrl + '/login', params);
  }
}
