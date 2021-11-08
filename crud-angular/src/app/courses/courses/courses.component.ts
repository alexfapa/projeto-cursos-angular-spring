import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {_id: '1', name: 'Spring Boot', category: 'Back-end'},
    {_id: '2', name: 'Angular', category: 'Front-end'},
    {_id: '3', name: 'Docker', category: 'DevOps'}
  ];
  displayedColumns = ['_id','name', 'category']; //define quais campos vão ser exibidos do array

  constructor() {
    //this.courses = [];
  }

  ngOnInit(): void {
  }

}
