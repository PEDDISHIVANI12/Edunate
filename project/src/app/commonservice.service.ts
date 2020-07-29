import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
    
  private details: any;
  private getdata: any;
  
  constructor(private http: Http) { }
  
  detailsOfuser(data):void {
    this.details = data;
  }
  getDetails(){
    return this.details;
  }
  GetData(hero):void{
    this.getdata = hero;
  }
  GetSpecificData(){
    return this.getdata;
  }
    
    saveUser(user) {
      return this.http.post('http://localhost:8081/api/SaveUser/', user)
        .map((response: Response) => response.json());
    }
  
    GetUser() {
      return this.http.get('http://localhost:8081/api/getUser/')
        .map((response: Response) => response.json());
    }
    deleteUser(id) {
      return this.http.post('http://localhost:8081/api/deleteUser/', { 'id': id })
        .map((response: Response) => response.json());
    }
   
  }