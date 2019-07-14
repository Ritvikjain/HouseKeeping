import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-getworker',
  templateUrl: './getworker.component.html',
  styleUrls: ['./getworker.component.scss']
})
export class GetworkerComponent implements OnInit {
  workerid;
  list
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  get(){
    this.http.post("http://localhost:8000/get-tasks-for-worker/", {workerId: this.workerid}).subscribe(
      (data)=>{
        this.list = <any>data;
        console.log(this.list);
      })
  }
}
