import { Injectable } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post.model';
import { Observable } from 'rxjs';
import { BlogPost } from '../models/blog-post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  //constructor(private http: HttpClient) to inject Angular’s built-in HttpClient service into our component or service, so we can make HTTP calls like GET, POST, etc.
  constructor(private http:HttpClient) { }

  AddNewBlogPost(data:AddBlogPost):Observable<BlogPost>{
    return this.http.post<BlogPost>(`${environment.apiURL}/api/BlogPost`,data);
  }
}
