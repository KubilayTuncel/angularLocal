
import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { AlertifyService } from '../services/alertify.service';
import { MovieService } from '../services/movie.service';




@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  FilteredMovies: Movie[] = [];
 // movieRepository: MovieRepository;

  title="Film Listesi";
  today = new Date();

  filterText: string = "";
  filmType: string = "";
  error: any;

  constructor(private alertify: AlertifyService,
              private movieService: MovieService) {
   // this.movieRepository = new MovieRepository();
   // this.movies = this.movieRepository.getMovies();
   // this.popularMovies = this.movieRepository.getPopularMovies();
    
   }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(data => {
      this.movies = data;
      this.FilteredMovies = this.movies
    },error=>this.error = error
    ); 
  }
  
  addToList($event: any, movie: Movie) {
    if ($event.target.classList.contains('btn-primary')) {
      $event.target.innerText = "Remove To List"
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');
      this.alertify.success(movie.title + 'listene eklendi.')
    } else {
      $event.target.innerText = "Add To List"
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');
      this.alertify.error(movie.title + 'listeden cikarildi.')
    }
  }


}
