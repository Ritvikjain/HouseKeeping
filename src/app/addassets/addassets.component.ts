import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addassets',
  templateUrl: './addassets.component.html',
  styleUrls: ['./addassets.component.scss']
})
export class AddassetsComponent implements OnInit {
  assetname;
  assetsList;
  show = false
  constructor(private http:HttpClient) {
    
  }

  ngOnInit() {
    this.http.post("http://localhost:8000/all", {}).subscribe(
      (data)=>{
        this.assetsList = <any>data;
        console.log(this.assetsList);
      })
  }
  add(){
    this.http.post("http://localhost:8000/add-asset", {name: this.assetname}).subscribe(
        (data)=>{
          console.log(data);
        }
      )
  }
  showList(){
    this.show = true;
  }
  hideList(){
    this.show = false;
  }
}
