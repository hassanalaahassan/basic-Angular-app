import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Api } from '../../environments/environments.prod';

/**
 * Service to handle all API HTTP operations
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly http = inject(HttpClient);

  /**
   * Perform GET request
   * @param endpoint API endpoint (without base URL)
   * @param params Query parameters
   * @param headers Optional headers
   * @returns Observable of type T
   */
  get<T>(endpoint: string, params?: any, headers?: HttpHeaders): Observable<T> {
    return this.http.get<T>(`${Api.url}${endpoint}`, {
      params: new HttpParams({ fromObject: params }),
      headers
    }).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Perform POST request
   * @param endpoint API endpoint
   * @param body Request body
   * @param headers Optional headers
   * @returns Observable of type T
   */
  post<T>(endpoint: string, body?: any, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(`${Api.url}${endpoint}`, body, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Perform PUT request
   * @param endpoint API endpoint
   * @param body Request body
   * @param headers Optional headers
   * @returns Observable of type T
   */
  put<T>(endpoint: string, body?: any, headers?: HttpHeaders): Observable<T> {
    return this.http.put<T>(`${Api.url}${endpoint}`, body, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Perform DELETE request
   * @param endpoint API endpoint
   * @param headers Optional headers
   * @returns Observable of type T
   */
  delete<T>(endpoint: string, headers?: HttpHeaders): Observable<T> {
    return this.http.delete<T>(`${Api.url}${endpoint}`, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Handle API errors
   * @param error Error object
   * @returns Error observable
   */
  private handleError(error: any): Observable<never> {
    console.error('API Error:', error);
    // يمكنك هنا إضافة معالجة خاصة لأخطاء معينة
    return throwError(() => new Error(error.message || 'An unknown error occurred'));
  }
}
