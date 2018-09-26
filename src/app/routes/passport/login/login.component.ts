import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import {
  SocialService,
  SocialOpenType,
  TokenService,
  DA_SERVICE_TOKEN,
} from '@delon/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error = '';
  loading = false;
  loadingdesc = '登录';
  submitTime = new Date();

  // redirectUrl = '/';
  constructor(
    private fb: FormBuilder,
    private loginApi: LoginService,
    private router: Router,
    @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService,
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
  submitForm(): void {
    this.error = '';
    const loginParams = {
      loginId: this.userName.value,
      passcode: this.password.value,
      oneTimeCode: this.submitTime.getTime()
    };
    if (this.form.valid) {
      this.loading = true;
      this.loadingdesc = '登录中...';
      this.loginApi.login(loginParams)
        .subscribe(res => {
          this.loading = false;
          this.router.navigateByUrl('default/table');
          // 设置Token信息
          this.tokenService.set({
            token: res.token,
            id: res.id,
            time: +new Date(),
          });
          console.log(res);
        });
    }
  }

  get userName() { return this.form.controls.userName; }
  get password() { return this.form.controls.password; }


}
