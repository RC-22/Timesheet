import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  // Handle login logic
  login(email: string, password: string): void {
    // Simple check to simulate authentication
    if (email && password) {
      localStorage.setItem('user', JSON.stringify({ email, password }));
    }
  }
  // Handle logout logic
  logout(): void {
    localStorage.removeItem('user');
  }
  // Check if the user is logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
}