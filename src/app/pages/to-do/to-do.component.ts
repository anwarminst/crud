import { Component, OnInit } from '@angular/core';
import { NgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [NgZorroAntdModule, CommonModule, FormsModule, ReactiveFormsModule,],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.less'
})
export class ToDoComponent implements OnInit {
  public todos: { title: string, description: string }[] = [];
  public isToDoAddVisible: boolean = false;
  public title: string = '';
  public description: string = '';

  public todoForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

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

    if (this.todoForm.valid) {
      const { title, description } = this.todoForm.value;
      if (title && description) {
        this.todos.push({ title, description });
        localStorage.setItem('todos', JSON.stringify(this.todos));
      }
    }
    this.isToDoAddVisible = false;
  }

}

//first import
//FormsModule, ReactiveFormsModule,

//import FormControl and create input FormControl
//titleControl = new FormControl('');

//regist in html
//<input nz - input placeholder = "Please enter title"[formControl] = "titleControl" type = "text" />

//get input value
//console.log(this.titleControl.value);