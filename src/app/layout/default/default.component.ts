import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.less']
})
export class DefaultComponent implements OnInit {
  isCollapsed = false;
  triggerTemplate = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  constructor() { }
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
  ngOnInit() {
  }
}
