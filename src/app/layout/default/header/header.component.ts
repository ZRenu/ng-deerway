import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  /**屏幕尺寸 */
  resize = document.body.clientWidth;
  isCollapsed = false;
  @Output() nzCollapsed = new EventEmitter<void>();
  constructor(
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    /**监听浏览器的变化 */
    fromEvent(window, 'resize')
      .subscribe((e) => {
        this.resize = e.currentTarget['innerWidth'];
      });
  }
  changeIcon() {
    this.isCollapsed = !this.isCollapsed;
    this.nzCollapsed.emit();
  }
  logout() {
    this.tokenService.clear();
    this.router.navigateByUrl('passport/login');
  }
}
