import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addworker',
  templateUrl: './addworker.component.html',
  styleUrls: ['./addworker.component.scss']
})
export class AddworkerComponent implements OnInit {
  workerName;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  add()
  {
    this.http.post("http://localhost:8000/add-worker", {name: this.workerName,tasks:[]}).subscribe(
        (data)=>{
          console.log(data);
        }
      )
  }

}
