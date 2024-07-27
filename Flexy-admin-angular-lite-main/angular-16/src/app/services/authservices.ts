import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Adjust as needed
  }

  login(token: string, password: string): void {
    localStorage.setItem('token', token); // Or sessionStorage
    this.router.navigate(['/home']); // Redirect to home or intended page
  }

  logout(): void {
    localStorage.removeItem('token'); // Or sessionStorage
    this.router.navigate(['/login']); // Redirect to login page
  }
}
