import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../models/category";

@Injectable()
export class CategoryService {
    url:string = "http://localhost:3000/categories"; //burada yasadigim problem 
    //You get TypeError: Cannot read property 'toLowerCase' of undefined" error
    // since angular is trying to convert the string baseUrl to all lowercases(just in case) 
    //with the native method toLowercase, and since it is actually not defined in your code correctly, 
    //baseUrl is not defined nor a string, so the error is thrown.
    //bu yüzden url tanimlamasini string e set etmemiz gerekiyor.

    constructor(private http: HttpClient) {}

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(this.url)
    }
}