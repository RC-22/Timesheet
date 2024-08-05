import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  changePassword(currentPassword: string, newPassword: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private router: Router) { }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Check if token exists in localStorage
  }

  login(token: string, password: string): void {
    localStorage.setItem('token', token); // Store token in localStorage (or sessionStorage)
    this.router.navigate(['/home']); // Navigate to home or intended page after successful login
  }

  logout(): void {
    localStorage.removeItem('token'); // Remove token from localStorage (or sessionStorage)
    this.router.navigate(['/login']); // Navigate to login page after logout
  }

 
  


}
