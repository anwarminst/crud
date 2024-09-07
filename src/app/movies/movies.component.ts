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
  isVisible = false;
  selectedMovie: any;

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
    this.listOfMovies[index] = this.selectedMovie;
  }

  Cancel(): void {
    this.isVisible = false;
  }
  delete(index: number): void {
    this.listOfMovies.splice(index, 1);
  }

}
