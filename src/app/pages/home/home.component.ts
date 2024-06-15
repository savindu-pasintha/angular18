import { Component } from '@angular/core';
import { SharedModule } from '../../components/shared.module';

@Component({
  selector: 'home-root',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports:[SharedModule]
})

export class HomeComponent {
  title = 'angularhome1';
  savindu = 'savindu pasintha';
}
