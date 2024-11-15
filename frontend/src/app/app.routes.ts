import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { MostrarObservacionComponent } from './componentes/observaciones/mostrar-observaciones/mostrar-observaciones.component';
import { authGuard } from './guards/auth.guard';
import { CrearObservacionComponent } from './componentes/observaciones/crear-observaciones/crear-observaciones.component';
import { MostrarZonasComponent } from './componentes/zonas/mostrar-zonas/mostrar-zonas.component';
import { CrearZonasComponent } from './componentes/zonas/crear-zonas/crear-zonas.component';
import { VistaGeneralComponent } from './componentes/vista-general/vista-general.component';
import { MostrarUsuariosComponent } from './componentes/usuarios/mostrar-usuarios/mostrar-usuarios.component';
import { CrearUsuariosComponent } from './componentes/usuarios/crear-usuarios/crear-usuarios.component';
import { MostrarRolesComponent } from './componentes/roles/mostrar-roles/mostrar-roles.component';
import { CrearRolComponent } from './componentes/roles/crear-rol/crear-rol.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'observaciones',
        component: MostrarObservacionComponent,
        canActivate: [authGuard]
    },
    {
        path: 'observaciones/nueva',
        component: CrearObservacionComponent,
        canActivate: [authGuard]
    },
    {
        path: 'observaciones/edit/:id',
        component: CrearObservacionComponent,
        canActivate: [authGuard]
    },
    {
        path: 'admin',
        component: VistaGeneralComponent,
        canActivate: [authGuard],
        children: [
            {
                path: 'observaciones',
                component: MostrarObservacionComponent,
                canActivate: [authGuard]
            },
            {
                path: 'observaciones/nueva',
                component: CrearObservacionComponent,
                canActivate: [authGuard]
            },
            {
                path: 'observaciones/edit/:id',
                component: CrearObservacionComponent,
                canActivate: [authGuard]
            },
            {
                path: 'zonas',
                component: MostrarZonasComponent,
                canActivate: [authGuard]
            },
            {
                path: 'zonas/nueva',
                component: CrearZonasComponent,
                canActivate: [authGuard]
            },
            {
                path: 'zonas/edit/:id',
                component: CrearZonasComponent,
                canActivate: [authGuard]
            },
            {
                path: 'usuarios',
                component: MostrarUsuariosComponent,
                canActivate: [authGuard]
            },
            {
                path: 'usuarios/nuevo',
                component: CrearUsuariosComponent,
                canActivate: [authGuard]
            },
            {
                path: 'usuarios/edit/:id',
                component: CrearUsuariosComponent,
                canActivate: [authGuard]
            },
            {
                path: 'roles',
                component: MostrarRolesComponent,
                canActivate: [authGuard]
            },
            {
                path: 'roles/nuevo',
                component: CrearRolComponent,
                canActivate: [authGuard]
            },
            {
                path: 'roles/edit/:id',
                component: CrearRolComponent,
                canActivate: [authGuard]
            }
        ]
    }
    ,
    { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirección inicial al login
    { path: '**', redirectTo: '/login' }  // Ruta por defecto si no existe
];
