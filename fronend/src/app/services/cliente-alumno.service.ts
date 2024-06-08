import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Alumno } from '../models/Alumno';

 

@Injectable({
  providedIn: 'root'
})
export class ClienteAlumnoService {
  private apiUrl = 'http://127.0.0.1:3000/alumno';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  

  constructor(private http: HttpClient) { } 

  getAlumnos(): Observable<Alumno[]>{
    return this.http.get<Alumno[]>(this.apiUrl);
  }

  postAlumno(alumno : Alumno): Observable<Alumno>{
    return this.http.post<Alumno>(this.apiUrl, alumno, this.httpOptions).pipe(
      catchError(this.handleError<any>('addItem'))
    );
  }

  putAlumno(alumno : Alumno): Observable<Alumno>{
    return this.http.put<Alumno>(this.apiUrl, alumno, this.httpOptions).pipe(
      catchError(this.handleError<any>('addItem'))
    );
  }

  delAlumno(alumno : Alumno): Observable<Alumno>{
    return this.http.delete<Alumno>(`${this.apiUrl}/${alumno.id_Alumno}`,  this.httpOptions).pipe(
      catchError(this.handleError<any>('addItem'))
    );
  }

}
