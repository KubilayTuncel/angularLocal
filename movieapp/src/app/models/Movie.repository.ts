import { Movie } from "./movie";

export class MovieRepository {
    private movies: Movie[];
    constructor(){
        this.movies = [
            {id: 1, title:'Film 1',description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, soluta sapiente blanditiis ad ipsum quidem porro similique recusandae corporis pariatur unde? Dicta aperiam aspernatur laboriosam in. Possimus necessitatibus accusantium modi'
            ,imageUrl:'1.jpeg',isPopular:true, datePublished: new Date(1990,10,10),type: 'Macera'},
            {id: 2, title:'Film 2',description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, soluta sapiente blanditiis ad ipsum quidem porro similique recusandae corporis pariatur unde? Dicta aperiam aspernatur laboriosam in. Possimus necessitatibus accusantium modi!'
            ,imageUrl:'2.jpeg',isPopular:false, datePublished: new Date(1990,10,10),type: 'Romantik'},
            {id: 3, title:'Film 3',description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, soluta sapiente blanditiis ad ipsum quidem porro similique recusandae corporis pariatur unde? Dicta aperiam aspernatur laboriosam in. Possimus necessitatibus accusantium modi!'
            ,imageUrl:'3.jpeg',isPopular:true, datePublished: new Date(1990,10,10),type: 'Bilim-Kurgu'},
            {id: 4, title:'Film 4',description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, soluta sapiente blanditiis ad ipsum quidem porro similique recusandae corporis pariatur unde? Dicta aperiam aspernatur laboriosam in. Possimus necessitatibus accusantium modi!'
            ,imageUrl:'4.jpeg',isPopular:false, datePublished: new Date(1990,10,10),type: 'Komedi'},
            {id: 4, title:'Film 4',description:'accusantium modi!'
            ,imageUrl:'4.jpeg',isPopular:false, datePublished: new Date(1990,10,10),type: 'Komedi'}
        ];
    }
    getMovies(): Movie[] {
        return this.movies;
    }

    getMovieById(id: number): Movie | undefined {
        return this.movies.find(i=>i.id === id);
    }
    getPopularMovies(): Movie[] {
        return this.movies.filter(i=>i.isPopular)
    }
}