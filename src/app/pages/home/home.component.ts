import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// Angular Material
import { MatToolbarModule }  from '@angular/material/toolbar';
import { MatButtonModule }   from '@angular/material/button';
import { MatIconModule }     from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule }     from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  servicios = [
    { icon: 'cloud',      title: 'Desarrollo Cloud',     desc: 'Soluciones escalables y seguras en la nube.' },
    { icon: 'shield',     title: 'Ciberseguridad',       desc: 'Protegemos tus activos digitales.' },
    { icon: 'bar_chart',  title: 'Análisis de Datos',    desc: 'Transformamos datos en insights.' }
  ];
}
