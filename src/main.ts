import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import AOS from 'aos';

AOS.init({
  duration: 1200,
  easing: 'ease-in-out-cubic',
  once: true
});

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
