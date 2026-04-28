import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
     
    </footer>
  `,
  styles: [`
    .footer {
      text-align: center;
      padding: 20px;
      background: #020617;
      margin-top: 40px;
    }
  `]
})
export class FooterComponent {}
