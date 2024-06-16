import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, catchError } from 'rxjs';
import { Inscripcion } from '../models/Inscripcion';
import { handleError } from './ErrorHTTP';

@Injectable({
  providedIn: 'root'
})
export class InscripcionAlumnoService { 

  private apiUrl = 'http://127.0.0.1:3000/Inscrip';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
 
  constructor(private http: HttpClient) { } 

  get(): Observable<Inscripcion[]>{
    return this.http.get<Inscripcion[]>(this.apiUrl);
  }

  post(argPost : Inscripcion): Observable<Inscripcion>{
    return this.http.post<Inscripcion>(this.apiUrl, argPost, this.httpOptions).pipe(catchError(handleError));
  }

  put(argPut : Inscripcion): Observable<Inscripcion>{
    return this.http.put<Inscripcion>(this.apiUrl, argPut, this.httpOptions).pipe(catchError(handleError));
  }

  del(argDel : Inscripcion): Observable<Inscripcion>{
    return this.http.delete<Inscripcion>(`${this.apiUrl}/${argDel.idinscripcion}`,  this.httpOptions).pipe(catchError(handleError));
  }

  ContratoPdf(argIdInscripcion : number): Observable<Blob>{
    return this.http.get(this.apiUrl+"/contrato/"+argIdInscripcion,{responseType:'blob'}).pipe();
  }
}
