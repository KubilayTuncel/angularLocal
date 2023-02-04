import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoryRepository } from '../models/categoriy.repository';
import { Category } from '../models/category';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/Movie.repository';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  categoryRepository: CategoryRepository;
  FilteredMovies: Movie[];
  movies: Movie[];
  //movieRepository: MovieRepository = new MovieRepository;
  filmType: Category | undefined ;
  selectedCategory: Category =null ;
  
  constructor( 
               private categoryService:CategoryService) { 
   // this.categoryRepository = new CategoryRepository();
   // this.categories = this.categoryRepository.getCategories();
   // this.movies = this.movieRepository.getMovies();
   // this.FilteredMovies = this.movies;
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
      
    }); 
  }

  onClick() {
   this.FilteredMovies = this.filmType?
    this.movies.filter(m=>m.type ===this.filmType?.name):this.movies;
  }

  displayAll = true

  selectCategory(item?: Category) {
    if(item){
      this.selectedCategory = item;
      this.displayAll = false
    } else {
      this.selectedCategory =null;
      this.displayAll = true
    }
    
  }

}
