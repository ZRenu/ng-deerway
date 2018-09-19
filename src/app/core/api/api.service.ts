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
  get(url: string, params?: any): Observable<any> {
    if (params && params['query']) {
      params['query'] = JSON.stringify(params['query']);
    }
    const p = new HttpParams({
      fromObject: params
    });
    return this.http.get(this.urlPrefix + url, {
      params: p,
      withCredentials: true
    });
  }
  post(url: string, body?: any, params?: any): Observable<any> {
    console.log('url', url);
    return this.http.post(this.urlPrefix + url, body, {
      params: params,
      withCredentials: true
    });
  }
}
