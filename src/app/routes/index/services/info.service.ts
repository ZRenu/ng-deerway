import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(
    private api: ApiService
  ) { }
  getIdentity() {
    return this.api.get('questionnaire/party/identity');
  }
}
