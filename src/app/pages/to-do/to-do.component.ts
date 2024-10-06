import { Component, OnInit } from '@angular/core';
import { NgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [NgZorroAntdModule, CommonModule, FormsModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.less'
})
export class ToDoComponent implements OnInit {
  public todos: { title: string, description: string }[] = [];
  public isToDoAddVisible: boolean = false;
  public title: string = '';
  public description: string = '';

  constructor() {
    if (localStorage.getItem('todos')) {
      this.todos = JSON.parse(localStorage.getItem('todos')!);
    }
  }
  ngOnInit(): void {

  }

  addTodo(): void {
    this.isToDoAddVisible = true;
  }
  toDoAddhandleCancel(): void {
    this.isToDoAddVisible = false;
  }
  toDoAddhandleOk(): void {
    if (this.title && this.description) {
      this.todos.push({ title: this.title, description: this.description });
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
    this.isToDoAddVisible = false;
    this.title = '';
    this.description = '';
  }

}
