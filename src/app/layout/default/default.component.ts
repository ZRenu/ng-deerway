import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ApiService } from 'src/app/core/api/api.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.less']
})
export class DefaultComponent implements OnInit {
  isCollapsed = false;
  triggerTemplate = null;
  date;
  constructor(
    private api: ApiService
  ) { }
  launchSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
    const date = new Date();
    this.date = date.getFullYear();
    this.api.isConsole('NoConsole');
  }
}
