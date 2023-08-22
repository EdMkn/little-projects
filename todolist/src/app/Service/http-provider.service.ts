import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://localhost:8100/";

var httpLink = {
  getAllBook: apiUrl + "/api/book/getAllBook",
  deleteBookById: apiUrl + "/api/book/deleteBookById",
  getBookDetailById: apiUrl + "/api/book/getBookDetailById",
  saveBook: apiUrl + "/api/Book/saveBook"
}
@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {
  constructor(private webApiService: WebApiService) { }

  public getAllBook(): Observable<any> {
    return this.webApiService.get(httpLink.getAllBook);
  }
  public deleteBookById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteBookById + '?bookId=' + model, "");
  }
  public getBookDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getBookDetailById + '?bookId=' + model);
  }
  public saveBook(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveBook, model);
  }  
}                          