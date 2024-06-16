import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Alumno } from '../models/Alumno';
import { Contacto } from '../models/Contacto';
import { handleError } from './ErrorHTTP';

@Injectable({
  providedIn: 'root'
})
export class ContactoAlumnoService {

  private apiUrl = 'http://127.0.0.1:3000/Contact';

  constructor(private http: HttpClient) { }


  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  get(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(this.apiUrl);
  }
  getIdAlumno(id_Alumno : number): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(`${this.apiUrl}/${id_Alumno}`,);
  }

  post(arg: Contacto[]): Observable<Contacto[]> {
    return this.http.post<Contacto[]>(this.apiUrl, arg, this.httpOptions).pipe(catchError(handleError));
  }

  put(arg: Contacto[]): Observable<Contacto[]> {
    console.log(arg);
    return this.http.put<Contacto[]>(this.apiUrl, arg, this.httpOptions).pipe(catchError(handleError));
  }

  del(arg: Contacto, id_Alumno : number): Observable<Contacto> {
    return this.http.delete<Contacto>(`${this.apiUrl}/${id_Alumno}`, this.httpOptions).pipe(catchError(handleError));
  }
}
