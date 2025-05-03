import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderAnalyzerComponent } from '../../components/header-analyzer/header-analyzer.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-analyzer-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderAnalyzerComponent, FooterComponent],
  templateUrl: './analyzer-layout.component.html',
  styleUrl: './analyzer-layout.component.css'
})
export class AnalyzerLayoutComponent {

}
