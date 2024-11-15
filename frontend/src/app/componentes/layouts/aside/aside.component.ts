import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [PanelMenuModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  items: MenuItem[]=[];

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
      this.items = [
        {
          label: 'Observaciones',
          icon: 'pi pi-fw pi-calculator',
          routerLink: '/admin/observaciones',
        },
        {
          label: 'Usuarios',
          icon: 'pi pi-fw pi-users',
          routerLink: '/admin/usuarios',
        },
        {
          label: 'Zonas',
          icon: 'pi pi-fw pi-qrcode',
          routerLink: '/admin/zonas',
        },
        {
          label: 'Roles',
          icon: 'pi pi-fw pi-id-card',
          routerLink: '/admin/roles',
        }
      ];
    }

  cerrarSesion(){
    this.router.navigateByUrl('/login');
    localStorage.removeItem('authToken');
  }
}
