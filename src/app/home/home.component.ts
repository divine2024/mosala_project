import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { MdbCarouselModule} from 'mdb-angular-ui-kit/carousel'
import { FooterComponent } from "../footer/footer.component";
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        NavBarComponent,
        MdbCarouselModule,
        FooterComponent
    ]
})
export class HomeComponent {

}
