import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  users:any;
  constructor(private userData:UserdataService){
    this.userData.users().subscribe((data)=>{
      console.warn(data);
      this.users=data;
    })
  }
}
