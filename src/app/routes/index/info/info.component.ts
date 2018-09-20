import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../core/api/api.service';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { InfoService } from '../services/info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less']
})
export class InfoComponent implements OnInit {
  title;
  constructor(
    private api: ApiService,
    private infoApi: InfoService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.title = this.api.urlPrefix;
    console.log(this.tokenService.get());
    this.infoApi.getIdentity()
      .subscribe(res => {
        console.log(res);
      });
  }

}
