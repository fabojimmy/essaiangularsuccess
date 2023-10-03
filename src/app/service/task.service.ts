import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {}
  findAll()
  {
    return this.http.get<Task[]>("http://localhost:5000/tasks");
  }
  delete(id : number)
  {
    return this.http.delete(`http://localhost:5000/tasks/${id}`);
  }
  persist(task: Task)
  {
    return this.http.post<Task>("http://localhost:5000/tasks",task);
  }
  completed(id : number | undefined,completed :boolean)
  {
      return this.http.patch(`http://localhost:5000/tasks/${id}`,{completed: !completed});
  }
  update(task:Task)
  {
    return this.http.put(`http://localhost:5000/tasks/${task.id}`,{completed: task.completed,label:task.label});
  }
}
