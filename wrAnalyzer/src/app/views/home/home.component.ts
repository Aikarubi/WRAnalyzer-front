import { Component } from '@angular/core';
import { Seccion1Component } from '../../components/seccion1/seccion1.component';
import { Seccion2Component } from '../../components/seccion2/seccion2.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Seccion1Component, Seccion2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
