import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:'',component: HomeComponent},
    {path:'navBar',component: NavBarComponent},
    {path:'about',component: AboutComponent},
    {path:'contact',component: ContactComponent}
];
