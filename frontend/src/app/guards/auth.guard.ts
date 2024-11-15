import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);  // Inyecta el servicio de autenticación
  const router = inject(Router);  // Inyecta el Router para redireccionar si es necesario

  if (authService.isLoggedIn()) {
    return true;  // Permitir el acceso si el usuario está autenticado
  } else {
    alert('Debes iniciar sesión para acceder a esta página');  // Muestra un mensaje de alerta
    router.navigate(['/login']);  // Redirige a la página de login si no está autenticado
    return false;
  }
};
