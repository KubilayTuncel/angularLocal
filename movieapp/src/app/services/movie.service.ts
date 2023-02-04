import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Movie } from "../models/movie";

@Injectable()
export class MovieService {
    url:string= " http://localhost:3000/movies";

    constructor(private http: HttpClient){}

    getMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.url).pipe(
            tap(data =>console.log(data)),
            catchError(this.handleError)
        )
    }

    private handleError(error: HttpErrorResponse) {
        if(error.error instanceof ErrorEvent) {
            //client ya da network
            console.log(error.error.message)
        }else{
            //backend
            switch(error.status) {
                case 400:
                    console.log("not found")
                    break;
                case 403:
                    console.log("access denied")
                    break;
                case 500:
                    console.log("interval server")
                    break
                default:
                    console.log("bilinmeyen hata")

            }
        }
        return throwError("bir hata olustu.")
    }
}