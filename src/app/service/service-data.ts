// import { Injectable } from '@angular/core';
// import {Http , Headers , RequestOptions ,Response} from '@angular/http';
// import 'rxjs/add/operator/map';
// import {Observable} from "rxjs/Observable";
// import {IPosts} from "./posts";
// @Injectable()
// export class DataService {
//   result: any;
//   private _postsURL = "https://jsonplaceholder.typicode.com/users";
//   constructor( private  http: Http) { }
//   /* getuser() {
//      return this._http.get('/api/users')
//        .map(result => this.result = result.json().data);

//  }*/


//   datatables() {
//     console.log("hitting the data to get")

//     const headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//    return this.http
//              .get(this._postsURL)
//       .map(res => res.json() .catch(this.handleError))
//   }



// getPosts(): Observable {
//          return this.http
//              .get(this._postsURL)
//              .map((response: Response) => {
//                  return response.json();
//              })
//              .catch(this.handleError);
//      }

//    private handleError(error: Response) {
//          return Observable.throw(error.statusText);
//      }

// }

import {Injectable} from "@angular/core";
 import {Http, Response} from "@angular/http";
 import {Observable} from "rxjs/Observable";
 import "rxjs/Rx";
 import {IPosts} from "./posts";

 @Injectable()
 export class DataService {

     private _postsURL = "https://jsonplaceholder.typicode.com/users";

     constructor(private http: Http) {
     }

     getPosts(): Observable<IPosts[]> {
         return this.http
             .get(this._postsURL)
             .map((response: Response) => {
                 return <IPosts[]>response.json();
             })
             .catch(this.handleError);
     }

     private handleError(error: Response) {
         return Observable.throw(error.statusText);
     }
 }
