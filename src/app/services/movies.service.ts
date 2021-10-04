import { HttpClient,HttpHeaders } from '@angular/common/http'; //add
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

const httpHeader = new HttpHeaders({'Content-Type': 'application/json'});

@Injectable({  //add
  providedIn: 'root',
})


export class MoviesService {

  private apiURL: string = 'https://613d68c694dbd600172ab8c6.mockapi.io/';

  constructor(private http: HttpClient) {} //add HttpClient

  getMovies() {

    return this.http.get<Movie[]>(`${this.apiURL}movies`);
  }




  addMovie(newMovie: Movie) {
    return this.http.post(`${this.apiURL}/movies`, newMovie); //end point and passing in object.

  }


}