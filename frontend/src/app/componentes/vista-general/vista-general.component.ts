import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../layouts/footer/footer.component';
import { HeaderComponent } from '../layouts/header/header.component';
import { AsideComponent } from '../layouts/aside/aside.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vista-general',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, AsideComponent, CommonModule],
  templateUrl: './vista-general.component.html',
  styleUrl: './vista-general.component.css'
})
export class VistaGeneralComponent {

}