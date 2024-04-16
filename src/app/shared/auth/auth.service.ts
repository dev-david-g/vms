import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  login(username: string, password: string): Observable<boolean> {
    return this.http
      .get<any[]>('http://localhost:3000/users', {
        params: { username, password },
      })
      .pipe(
        map((users) => {
          if (users && users.length > 0) {
            // Store user details in local storage
            localStorage.setItem('currentUser', JSON.stringify(users[0]));
            return true;
          } else {
            return false;
          }
        })
      );
  }

  logout() {
    // Remove user from local storage to log out
    localStorage.removeItem('currentUser');
  }

  getCurrentUser() {
    const currentUserString = localStorage.getItem('currentUser');
    return currentUserString ? JSON.parse(currentUserString) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getCurrentUser();
  }
}
