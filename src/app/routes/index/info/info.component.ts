import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/api/api.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less']
})
export class InfoComponent implements OnInit {
  title;
  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.title = this.api.urlPrefix;
  }

}
