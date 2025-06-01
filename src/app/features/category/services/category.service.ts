import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Category } from '../models/category.model';
import { environment } from '../../../../environments/environment.development';
//make this service injectable
//this is a service and we will use this service in the component
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //private categoriesSubject=new BehaviorSubject<Category[]>([]);
  //$categories$ = this.categoriesSubject.asObservable();


  //constructors is used to add the dependencies like http client
  //http is the instance of the http client
  //and we will use this instance to make the http calls
  constructor(private http:HttpClient) { }
  
  
  //talk to the backend api
  //return an observable and it come from  rcjx functionality
  //this is basically like an promise
  //but it is more powerful than a promise and generic class
  addCategory(model:AddCategoryRequest):Observable<void>{
    //now we have to return something from here using http because we are communicating
    //with the backend api
    //we will use http client to do that so for that we need to inject http module in constructo

    //and model is the object we are passing to the backend and model is body
    return this.http.post<void>('https://localhost:7262/api/Categories',model);
  }

  GetAllCategories():Observable<Category[]>{
    return this.http.get<Category[]>(`${environment.apiURL}/Categories`);
  }

  // GetAllCategories():Observable<HttpEvent<Category[]>>{
  //   return this.http.get<Category[]>(`${environment.apiURL}/Categories`);
  // }



}
