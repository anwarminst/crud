import { Component } from '@angular/core';
import { NgZorroAntdModule } from '../../ng-zorro-antd.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, NgZorroAntdModule, FormsModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.less'
})
export class MoviesComponent {
  public isVisible:boolean = false;
  public isAddMovieVisible:boolean = false;
  selectedMovie: any;
  newMovie: any;
  currentMovie: any;
  public name: string = '';
  public actor: string = '';
  public actress: string = '';
  public release_year: number = 0;
  // public poster_url: string = '';

  public listOfMovies = [
    {
      "name": "Inception",
      "actor": "Leonardo DiCaprio",
      "actress": "Elliot Page",
      "release_year": 2010,
      "poster_url": "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-28384,resizemode-75,msid-105174338/magazines/panache/how-a-leo-dicaprio-meme-turned-the-great-gatsby-into-an-all-time-bestseller-in-france.jpg"
    },
    {
      "name": "The Dark Knight",
      "actor": "Christian Bale",
      "actress": "Maggie Gyllenhaal",
      "release_year": 2008,
      "poster_url": "https://m.media-amazon.com/images/I/51K8ouYrHeL._AC_SY679_.jpg"
    },
    {
      "name": "Titanic",
      "actor": "Leonardo DiCaprio",
      "actress": "Kate Winslet",
      "release_year": 1997,
      "poster_url": "https://images-cdn.ubuy.co.in/634e8a295969a905551ac90d-liqixi-retro-metal-sign-vintage-tin-sign.jpg"
    },
    {
      "name": "The Matrix",
      "actor": "Keanu Reeves",
      "actress": "Carrie-Anne Moss",
      "release_year": 1999,
      "poster_url": "https://m.media-amazon.com/images/I/51vpnbwFHrL._AC_.jpg"
    },
    {
      "name": "La La Land",
      "actor": "Ryan Gosling",
      "actress": "Emma Stone",
      "release_year": 2016,
      "poster_url": "https://images.justwatch.com/poster/77207501/s718/la-la-land.jpg"
    }
  ];


  showModal(index: number): void {
    this.isVisible = true;
    this.selectedMovie = this.listOfMovies[index];
  }

  Ok(): void {
    this.isVisible = false;
    let index = this.listOfMovies.findIndex((movie) => movie.name === this.selectedMovie.name);
   
    if (index === -1 && !this.currentMovie) {
      this.listOfMovies[index] = this.currentMovie;
    }
    
  }

  Cancel(): void {
    this.isVisible = false;
  }
  delete(index: number): void {
    this.listOfMovies.splice(index, 1);
  }


  onValueCahnge(value: any, key: string): void {
    let index = this.listOfMovies.findIndex((movie) => movie.name === this.selectedMovie.name);
    this.currentMovie = this.listOfMovies[index];
    switch (key) {
      case "name":
        this.currentMovie.name = value;
        break;
      case "actor":
        this.currentMovie.actor = value;
        break;
      case "actress":
        this.currentMovie.actress = value;
        break;
      case "release_year":
        this.currentMovie.release_year = value;
        break;
    }
    console.log("selectedMovie changed : ", this.currentMovie);
  }

  addMovie(): void {  
    this.isAddMovieVisible = true;

  }

  addMovieCancel(): void {
    this.isAddMovieVisible = false;
  }

  addMovieOk(): void {
    this.isAddMovieVisible = false;
    let newMovie = {
      "name": this.name,
      "actor": this.actor,
      "actress": this.actress,
      "release_year": this.release_year,
      "poster_url": "https://m.media-amazon.com/images/I/51vpnbwFHrL._AC_.jpg"
    }
    this.listOfMovies.push(newMovie)
    this.name = '';
    this.actor = '';
    this.actress = '';
    this.release_year = 0;
  }
}
