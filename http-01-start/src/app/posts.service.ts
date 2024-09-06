import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./posts.model";
import {map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PostsService {
    
    constructor(private http: HttpClient){

    }
    createAndStorePost(title:string, content:string){
    const postData: Post = {title: title, content:content };
        // Send Http request
    console.log(postData);
    this.http
      .post<{ name: string }>(
        "https://angular-demo-102021-default-rtdb.firebaseio.com/posts.json",
        postData
      )
      .subscribe((posts) => {
        console.log(posts);
      });
    }

    fetchPosts(){
      return this.http
      .get<{ [key: string]: Post }>(
        "https://angular-demo-102021-default-rtdb.firebaseio.com/posts.json"
      )
      .pipe(
        map((responseData) => {
          const postArr: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArr.push({ ...responseData[key], id: key });
            }
          }
          return postArr;
        })
      );
    }
}