import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Curso } from '../models/Curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {


  private apiUrl = 'http://127.0.0.1:3000/course';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  

  constructor(private http: HttpClient) { } 

  get(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.apiUrl);
  }

  post(argPost : Curso): Observable<Curso>{
    console.log(argPost);
    return this.http.post<Curso>(this.apiUrl, argPost, this.httpOptions).pipe(
      catchError(this.handleError<any>('addItem'))
    );
  }

  put(argPut : Curso): Observable<Curso>{
    console.log(argPut);
    return this.http.put<Curso>(this.apiUrl, argPut, this.httpOptions).pipe(
      catchError(this.handleError<any>('addItem'))
    );
  }

  del(argDel : Curso): Observable<Curso>{
    return this.http.delete<Curso>(`${this.apiUrl}/${argDel.idCurso}`,  this.httpOptions).pipe(
      catchError(this.handleError<any>('addItem'))
    );
  }
}
