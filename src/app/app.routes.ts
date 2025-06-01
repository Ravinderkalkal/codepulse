import { Routes } from '@angular/router';
import { CategoryListComponent } from './features/category/category-list/category-list.component'; 
import { AddCategoryComponent } from './features/category/add-category/add-category.component'; 
import { CategoryEditComponent } from './features/category/category-edit/category-edit.component';
import { AddBlogPostComponent } from './features/blogPost/add-blog-post/add-blog-post.component';

export const routes: Routes = [
 {path:'',component:CategoryListComponent},
 {path:'admin/category',component:CategoryListComponent},
 {path:'admin/categories/add',component:AddCategoryComponent},
 {path:'admin/categories/:id',component:CategoryEditComponent},
 {path:'admin/blogPost/add',component:AddBlogPostComponent},
 
];