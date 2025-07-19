import { Component, OnInit }      from '@angular/core';
import { Router, RouterModule, RouterOutlet, RouterLink }   from '@angular/router';
import { CommonModule }           from '@angular/common';

// Angular Material
import { MatSidenavModule }  from '@angular/material/sidenav';
import { MatToolbarModule }  from '@angular/material/toolbar';
import { MatListModule }     from '@angular/material/list';
import { MatIconModule }     from '@angular/material/icon';
import { MatButtonModule }   from '@angular/material/button';
import { AuthService } from './auth/auth.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    RouterLink,    
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuthenticated$ = this.auth.isAuthenticated$;
  isAdmin$         = this.auth.getRoles$().pipe(
                       map(rs => rs.includes('Admin'))
                     );

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    // Si la URL es /auth-callback, procesar tokens
    if (this.router.url.startsWith('/auth-callback')) {
      this.auth.completeAuthentication().subscribe();
    }
  }

  logout(): void {
    this.auth.logout();
  }
}
