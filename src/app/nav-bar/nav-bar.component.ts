import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MdbCollapseModule} from 'mdb-angular-ui-kit/collapse'
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MdbCollapseModule,
    RouterLink
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
