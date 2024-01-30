import { Component, NgZone, OnInit } from '@angular/core';
import { AuthService } from '../portfolio/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  constructor(
    private service: AuthService,
    private router: Router,
    private _ngZone: NgZone
  ) {}

  ngOnInit(): void {}
  public logout() {
    this.service.signOutExternal();
    this._ngZone.run(() =>
      this.router.navigate(['/']).then(() => window.location.reload)
    );
  }
}
