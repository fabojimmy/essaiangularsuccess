import { Component,OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-staks',
  templateUrl: './staks.component.html',
  styleUrls: ['./staks.component.css']
})
export class StaksComponent implements OnInit{
  myTask:Task={
     label:'',
     completed: false
  }
  editForm=false;
  tasks: Task[]=[];
  constructor(private taskService: TaskService){}
  ngOnInit(): void {
      this.getTasks();
  }
  getTasks(){
    this.taskService.findAll()
        .subscribe(tasks => this.tasks = tasks);
  }
  deleteTask(id : number )
  {
    this.taskService.delete(id).subscribe(()=>
      {
        this.tasks=this.tasks.filter(task => task.id!=id)
      }
    )
  }
  persistTask()
  {
    this.taskService.persist(this.myTask)
      .subscribe((task)=>{
        this.tasks=[task, ...this.tasks]
        this.reserTask();
      });
  }
  reserTask(){
    this.myTask={
      label:'',
      completed:false
    }
  }
  toggleCompleted(task :Task){
     this.taskService.completed(task.id,task.completed).subscribe(()=>{
        task.completed=!task.completed
      })
  }
  editTask(task: Task)
  {
    this.myTask=task
    this.editForm=true;
  }
  updateTask(){
    this.taskService.update(this.myTask).subscribe(
      task=>{
         this.reserTask();
         this.editForm=false
      }
    )
  }
}
