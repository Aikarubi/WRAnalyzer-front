import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-analyzer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-analyzer.component.html',
  styleUrl: './header-analyzer.component.css'
})
export class HeaderAnalyzerComponent {

}
