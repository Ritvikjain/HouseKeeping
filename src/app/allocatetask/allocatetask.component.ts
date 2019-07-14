import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-allocatetask',
  templateUrl: './allocatetask.component.html',
  styleUrls: ['./allocatetask.component.scss']
})
export class AllocatetaskComponent implements OnInit {
  assetId;
  taskId;
  workerId;
  allocTime;
  deadline;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  allocate(){
    this.http.post("http://localhost:8000/allocate-task", {assetid: this.assetId , taskid: this.taskId,workerId: this.workerId,allocTime: this.allocTime,deadline:this.deadline}).subscribe(
        (data)=>{
          console.log(data);
        }
      )
  }
}
