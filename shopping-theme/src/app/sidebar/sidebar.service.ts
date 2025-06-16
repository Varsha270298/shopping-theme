import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class SidebarService {
    url = "https://jsonplaceholder.typicode.com/posts/1/comments";
 
    constructor(private http: HttpClient) { }
  
    getPostservices(apilink: any) {
      if ( apilink ) {
        this.url = apilink;
      }
      return this.http.get(this.url);
    }
  
    postPostServices(apilink: any, payload: any) {
      if ( apilink ) {
        this.url = apilink;
      }
      return this.http.post(this.url, payload);
    }
  
    putPostServices(apilink: any, data: any) {
      if ( apilink ) {
        this.url = apilink;
      }
      return this.http.put(this.url, data.payload);
    }
  
    deletePostServices(apilink: any, id: any) {
      if ( apilink ) {
        this.url = apilink;
      }
      return this.http.delete<any>(this.url);
    }
  }

  