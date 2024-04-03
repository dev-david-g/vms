import { ChangeDetectionStrategy, Component, OnInit, Signal, WritableSignal, computed, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public firstWord: WritableSignal<string> = signal('VM ');
  public secondWord: WritableSignal<string> = signal('manager')
  public appName: Signal<string> = computed(() => {return this.firstWord() + this.secondWord()});
}
