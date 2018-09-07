import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs';
import { Observable } from 'rxjs';

export const API_URL = new InjectionToken<string>('apiUrl');
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    @Inject(API_URL) public urlPrefix,
  ) { }
}
