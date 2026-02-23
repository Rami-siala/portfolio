import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomBarComponent } from './components/shared/bottom-bar/bottom-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BottomBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
