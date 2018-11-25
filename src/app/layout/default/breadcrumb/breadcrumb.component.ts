import { Component, OnInit } from '@angular/core';
import { MenusService } from 'src/app/core/menus/menus.service';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.less']
})
export class BreadcrumbComponent implements OnInit {
  menus;
  constructor(
    private menu: MenusService
  ) { }

  ngOnInit() {
    this.menus = this.menu.menus();
  }

}
