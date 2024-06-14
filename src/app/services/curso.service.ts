import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Curso } from '../models/Curso';
import { handleError } from './ErrorHTTP';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private apiUrl = 'http://127.0.0.1:3000/course';

  constructor(private http: HttpClient) { }


  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };





  get(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.apiUrl);
  }

  getId(id: number): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.apiUrl+"/"+id);
  }

  post(argPost: Curso): Observable<Curso> {
    console.log(argPost);
    return this.http.post<Curso>(this.apiUrl, argPost, this.httpOptions).pipe(catchError(handleError));
  }

  put(argPut: Curso): Observable<Curso> {
    console.log(argPut);
    return this.http.put<Curso>(this.apiUrl, argPut, this.httpOptions).pipe(catchError(handleError));
  }

  del(argDel: Curso): Observable<Curso> {
    return this.http.delete<Curso>(`${this.apiUrl}/${argDel.idCurso}`, this.httpOptions).pipe(catchError(handleError));
  }
}
