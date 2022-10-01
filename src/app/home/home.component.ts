import { Component } from '@angular/core';
import { routerTransition } from 'src/router.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [routerTransition()],
//   host: {'[@routerTransition]': ''}
})
export class HomeComponent {

}