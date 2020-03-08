import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errors: any[] = [];
  notifyMessage = '';
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initForm();

    this.route.params.subscribe((params) => {
      if (params.registered === 'success') {
        this.notifyMessage = 'Registration successful, you can now login';
      }
    });
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$'
          )
        ]
      ],
      password: ['', Validators.required]
    });
  }

  isInvalidForm(fieldname): boolean {
    return (
      this.loginForm.controls[fieldname].invalid &&
      (this.loginForm.controls[fieldname].dirty ||
        this.loginForm.controls[fieldname].touched)
    );
  }

  isRequired(fieldname): boolean {
    return this.loginForm.controls[fieldname].errors.required;
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe(
      () => {
        this.router.navigate(['/rentals']);
      },
      errorResponse => (this.errors = errorResponse.error.errors)
    );
  }
}
