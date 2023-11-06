import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient) { }
  url="https://localhost:7284/api/Department"
  users(){
    return this.http.get(this.url)
    
  }
}
