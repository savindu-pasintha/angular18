import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})

export class NavigationComponent {
 val1  = "val1";
 val2 = "va12";
 itemList = [
  { name: 'Item 1', description: 'This is the first item.' },
  { name: 'Item 2', description: 'This is the second item.' },
  { name: 'Item 3', description: 'This is the third item.' }
];
}
