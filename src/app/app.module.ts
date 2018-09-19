import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { ApiService, API_URL } from './core/api/api.service';
import { environment } from '../environments/environment';
import { DelonAuthModule, SimpleInterceptor } from '@delon/auth';
import { DelonACLModule } from '@delon/acl';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    LayoutModule,
    RoutesModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DelonAuthModule.forRoot(),
    DelonACLModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
    { provide: NZ_I18N, useValue: zh_CN },
    ApiService,
    {
      provide: API_URL,
      useValue: environment.urlPrefix
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
