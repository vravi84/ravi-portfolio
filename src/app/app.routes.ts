import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { TeachingComponent } from './pages/teaching/teaching';
import { DeveloperComponent } from './pages/developer/developer';
import {ProjectsComponent}  from './pages/projects/projects';
import {ContactComponent} from './pages/contact/contact'

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teaching', component: TeachingComponent },
  { path: 'developer', component: DeveloperComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' } ,

];