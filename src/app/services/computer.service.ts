import { Injectable } from '@angular/core';
import { Computer } from 'src/app/models/computer';
import { Observable, throwError } from 'rxjs/index';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/internal/operators';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  marques = ['Dell', 'HP', 'Apple', 'Asus'];
  types = ['Portable', 'Fixe', 'TabletteHybride'];
  categories = ['Gaming', 'Bureautique', 'Premier prix'];
  computers: Computer[];
  apiUrl = 'http://localhost:3000/computers';

  constructor(private httpClient: HttpClient) {
  }
  getAllComputers(): Observable<Computer[]> {
    return this.httpClient.get<Computer[]>(this.apiUrl).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  getComputerById(id: number): Observable<Computer> {
    return this.httpClient.get<Computer>(this.apiUrl + '/' + id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  add(computer: Computer): Observable<Computer> {
    computer.dateEntree = new Date();
    return this.httpClient.post<Computer>(this.apiUrl, computer).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  edit(computerToEdit: Computer): Observable<Computer> {
    return this.httpClient.put<Computer>(this.apiUrl + '/' + computerToEdit.id, computerToEdit).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  deleteComputer(id: number): Observable<Computer> {
    return this.httpClient.delete<Computer>(this.apiUrl + '/' + id).pipe(
      retry(1),
      catchError(this.handleError));
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
