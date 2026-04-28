import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl:'./projects.html',
  styleUrl:'./projects.css'
})
export class ProjectsComponent { }