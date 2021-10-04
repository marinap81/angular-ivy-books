import { Component, OnInit, VERSION } from '@angular/core';
import { Movie } from './models/movie';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
constructor(private moviesService: MoviesService) {} //pass in movie service

newMovie: Movie = { 
title:'',
createdBy:'',
};
 
moviesList: Movie[] = [];

ngOnInit(): void {
  //subscribe is listening for event below
  //subscribe is an observable ie event listener and
  this.getMovies();
    
}
getMovies(){
  this.moviesService.getMovies().subscribe((data) =>{
    this.moviesList = data; //assiging data from api
    console.log(this.moviesList);
});
}

addMovie() {
this.moviesService.addMovie(this.newMovie).subscribe((data) => { //listening for data from api
  console.log(data);

 });

}
}