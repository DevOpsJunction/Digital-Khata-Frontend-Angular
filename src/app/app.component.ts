import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  users:any; //for storing 
  postData : any={};  //storing data for posting


  constructor(private dataService:UserdataService){
    this.dataService.getData().subscribe((data) => {
      this.users = data;
      console.warn(data);
      
    });
  }
  postCustomer(){
    if(this.postData.id == 0){
      this.dataService.postData(this.postData).subscribe();
      window.location.reload();
    }
    else{
      this.dataService.updateData(this.postData).subscribe();
      window.location.reload();
    }
  }

  updateCustomer(product:any){
    this.postData=product; 
  }
  
  deleteCustomer(id:any){
    this.dataService.deleteData(id).subscribe();
    window.location.reload();
  }
}

