import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs'; 
import { ErrorApi } from '../models/ErrorApi';


export function handleError(error: any): Observable<never> { 
    let apiError: ErrorApi;
    if (error.error instanceof ErrorEvent) { 
      apiError = {
        statusCode: 0,
        message: error.error
      };
    } else { 
      apiError = {
        statusCode: error.status,
        message: error.error
      };
    }
 //   console.error(`Código de error: ${apiError.statusCode}\nMensaje: ${apiError.message}`);
    return throwError(apiError);
  }