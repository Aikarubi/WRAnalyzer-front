import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './views/home/home.component';
import { AnalyzerLayoutComponent } from './layouts/analyzer-layout/analyzer-layout.component';
import { AnalyzerComponent } from './views/analyzer/analyzer.component';

export const routes: Routes = [

    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', component: HomeComponent },
        ]
    },
    {
        path: 'analyzer',
        component: AnalyzerLayoutComponent,
        children: [
            { path: '', component: AnalyzerComponent },
        ]
    }
];
