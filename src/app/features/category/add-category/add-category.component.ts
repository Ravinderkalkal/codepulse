import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'app-add-category',
  imports: [FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

@Input()  model:AddCategoryRequest={name:'',urlHandle:''};   //The @Input() decorator means this property receives data from the parent component.
@Output() formSubmit = new EventEmitter<AddCategoryRequest>();  //The @Output() decorator lets the child component emit events to the parent.

  //inject the dependencies like category service and make call of function which will call to api
  constructor(private categoryservice:CategoryService){
    this.model={
      name:'Ravinder Kalkal',
      urlHandle:''
    };
  }

  SaveCategory(){
    this.categoryservice.addCategory(this.model)
    .subscribe({
      next:(response)=>{
        console.log('this is succussfull!');
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
}
