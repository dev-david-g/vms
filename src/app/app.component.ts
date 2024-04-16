import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Signal, WritableSignal, computed, effect, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './shared/auth/auth.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  private authService = inject(AuthService)
  private router = inject(Router);
  public firstWord: WritableSignal<string> = signal('VM ');
  public secondWord: WritableSignal<string> = signal('manager')
  public appName: Signal<string> = computed(() => {return this.firstWord() + this.secondWord()});

  
  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
