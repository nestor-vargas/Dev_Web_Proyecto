import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { ObservacionesService } from './services/observaciones.service';
import { ZonasService } from './services/zonas.service';
import { provideAnimations } from '@angular/platform-browser/animations';
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    AuthService,
    ObservacionesService,
    ZonasService
  ]
};
