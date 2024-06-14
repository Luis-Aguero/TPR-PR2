import { Alumno } from "./Alumno";
import { Curso } from "./Curso";

export interface Inscripcion {
    id_inscripcion: number;
    curso:Curso;
    alumno: Alumno;
    anoLectivo: number;
    estado_Inscripcion: string;
    fecha_Inscripcion: string;
    monto_Matricula: number;
    descuento: number;
    
    
}