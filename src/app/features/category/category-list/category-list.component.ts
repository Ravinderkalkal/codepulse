import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category.model';
import { FormsModule } from '@angular/forms';
import { NgFor,CommonModule } from '@angular/common';
@Component({
  selector: 'app-category-list',
  imports: [RouterModule,FormsModule,NgFor,CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit  {

  categories : Category[]=[];

  constructor(private categoryService:CategoryService){
    

  }

  ngOnInit(){
    //alert("Ravinder kalkal");
    this.categoryService.GetAllCategories().subscribe({
      next:(response)=>{    
        //alert(response);   
        this.categories = response;
        //alert(this.categories?.length)
      }
    })
  }

}
