import { Routes } from '@angular/router';
import { HolaMundoComponent } from './componentes/hola-mundo/hola-mundo.component';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { InscripcionesComponent } from './componentes/inscripciones/inscripciones.component';
import { ReportesComponent } from './componentes/reportes/reportes.component';
import { ArancelesComponent } from './componentes/aranceles/aranceles.component';

export const routes: Routes = [
    {path: 'alumno', component: AlumnosComponent},
    {path: 'curso', component: CursosComponent},
    {path: 'inscripcion', component:InscripcionesComponent},
    {path: 'reportes', component: ReportesComponent},
    {path: 'aranceles', component: ArancelesComponent},
    {path: '', component: HolaMundoComponent},
];