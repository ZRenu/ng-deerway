import { Component, OnInit, Input } from '@angular/core';
import { MenusService } from 'src/app/core/menus/menus.service';
@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.less']
})
export class SiderComponent implements OnInit {
  @Input() isCollapsed;
  triggerTemplate = null;
  menus;
  constructor(
    private menu: MenusService
  ) { }

  ngOnInit() {
    this.menus = this.menu.menus();
  }
}
