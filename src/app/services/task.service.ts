import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private url = 'http://localhost:5001/tasks';
  constructor(private http: HttpClient) {}
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }
  deleteTasks(task: Task): Observable<Task> {
    return this.http.delete<Task>(`${this.url}/${task.id}`);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.url}/${task.id}`, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.url, task, httpOptions);
  }
}
