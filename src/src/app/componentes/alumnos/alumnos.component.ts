import { Component } from '@angular/core';
import { Alumno } from '../../models/Alumno';
import { AlumnoComponent } from './alumno/alumno.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteAlumnoService } from '../../services/cliente-alumno.service';

@Component({
	selector: 'app-alumnos',
	standalone: true,
	imports: [],
	templateUrl: './alumnos.component.html',
	styleUrl: './alumnos.component.css'
})
export class AlumnosComponent {
	alumnos: Alumno[] = [];
	
	constructor(private modalService: NgbModal, private servicio:ClienteAlumnoService) {
		servicio.getAlumnos().pipe().subscribe((data)=>{
			this.alumnos = data;
		})
	}

	nuevoRegistro(): void {
		this.modificarRegistro({
			id_Alumno: 0,
			nomb_A: "",
			apellido_A: "",
			fech_Nac: "2022-01-14",
			direc_A: "",
			estado_A: "Activo",
			cedula:""
		}, -1);
	}

	modificarRegistro(arg: Alumno, id: number): void {
		const ventana = this.modalService.open(AlumnoComponent, { ariaLabelledBy: 'modal-basic-title', size: 'lg' });
		ventana.componentInstance.title = 'Ficha Alumnos';
		ventana.componentInstance.arg = arg
		ventana.result.then((result) => { 
			if(id == -1){
				this.alumnos.push(result)
			}else{
				this.alumnos[id] = result
			}
			
		}).catch((reason) => {
			console.log(`Motivo de cierre del modal: ${reason}`);
		});
	}

	eliminarRegistro(id: number): void {
		this.servicio.delAlumno(this.alumnos[id]).pipe().subscribe(
			(dato) =>{
				console.log(dato);
				this.alumnos.splice(id,1);
			}
		);

		
	}

}
