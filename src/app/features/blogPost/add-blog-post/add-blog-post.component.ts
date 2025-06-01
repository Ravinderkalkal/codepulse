import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddBlogPost } from '../models/add-blog-post.model';

@Component({
  selector: 'app-add-blog-post',
  imports: [FormsModule],
  templateUrl: './add-blog-post.component.html',
  styleUrl: './add-blog-post.component.css'
})
export class AddBlogPostComponent{

  addBlogPostData:AddBlogPost;
  constructor(){
    this.addBlogPostData={
      id:'',
      title:'',
      shortDescription:'',
      urlHandle:'',
      content:'',
      featuredImageUrl:'',
      author:'',
      isVisible:true,
      publishedDate:new Date()
    }
  }

  SaveBlogPost():void {
    
    console.log(this.addBlogPostData)
    
  }
}
