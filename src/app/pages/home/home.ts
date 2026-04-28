import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, BookOpen, Code, Router } from 'lucide-angular';

@Component({
  selector: 'app-home',
  standalone: true,
   imports: [LucideAngularModule,RouterLink],
  templateUrl:'./home.html' ,
  styleUrl:'./home.css'
})
export class HomeComponent {}
