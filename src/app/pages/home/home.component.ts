import { Component,Input } from '@angular/core';
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

  //chnage attr or props and access value
  @Input()  attribute1:string ='';
  @Input({required:true})  attribute2:number=0;

  @Input({transform: callFuction}) attribute3:string='hi';
}

function callFuction(attribute3: string | undefined) {
  return "change attr3 value by function";
}
