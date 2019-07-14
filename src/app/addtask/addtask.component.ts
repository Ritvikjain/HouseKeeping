import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddtaskComponent implements OnInit {
  taskTitle;
  taskDesc;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  addTask(){
    this.http.post("http://localhost:8000/add-task", {title: this.taskTitle , desc: this.taskDesc}).subscribe(
        (data)=>{
          console.log(data);
        }
      )
  }

}
