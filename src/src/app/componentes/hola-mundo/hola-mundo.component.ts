import { Component } from '@angular/core';
import { ClienteAlumnoService } from '../../services/cliente-alumno.service';
import { Alumno } from '../../models/Alumno';



@Component({
  selector: 'app-hola-mundo',
  standalone: true,
  imports: [],
  templateUrl: './hola-mundo.component.html',
  styleUrl: './hola-mundo.component.css'
})
export class HolaMundoComponent {
  alumnos: Alumno[] = []; 
  constructor(private alumnoService: ClienteAlumnoService) { }

  ngOnInit(): void {
    this.alumnoService.getAlumnos().subscribe((data: Alumno[]) => {
      this.alumnos = data;
    });
  }

}
