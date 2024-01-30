import { Component, NgZone, OnInit } from '@angular/core';
import { AuthService } from '../portfolio/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login() {
    throw new Error('Method not implemented.');
  }

  constructor(
    private service: AuthService,
    private router: Router,
    private _ngZone: NgZone
  ) {}

  ngOnInit(): void {}
}
