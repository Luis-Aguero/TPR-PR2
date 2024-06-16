import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Alumno } from '../models/Alumno';
import { handleError } from './ErrorHTTP';

@Injectable({
  providedIn: 'root'
})
export class ClienteAlumnoService {
  private apiUrl = 'http://127.0.0.1:3000/alumno';

  constructor(private http: HttpClient) { }


  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
 
  getAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.apiUrl);
  }

  postAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(this.apiUrl, alumno, this.httpOptions).pipe(catchError(handleError));
  }

  putAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.put<Alumno>(this.apiUrl, alumno, this.httpOptions).pipe(catchError(handleError));
  }

  delAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.delete<Alumno>(`${this.apiUrl}/${alumno.id_Alumno}`, this.httpOptions).pipe(catchError(handleError));
  }

}
