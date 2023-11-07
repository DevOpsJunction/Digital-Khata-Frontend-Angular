import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http:HttpClient) { }

  url="https://localhost:7064/api/Customer";

  getData(){
    return this.http.get(this.url)
  }
  
  postData(data:any) {
    
    return this.http.post(this.url,data);
  }

  deleteData(id:any){
    console.warn(id);
    return this.http.delete(`${this.url}/${id}`);
  }

  updateData(data:any){
    return this.http.put(this.url,data);
  }

}
