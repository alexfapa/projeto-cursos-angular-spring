import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [];
  displayedColumns = ['_id','name', 'category']; //define quais campos vão ser exibidos do array

  courseService: CoursesService;

  constructor() {
    //this.courses = [];
    this.courseService = new CoursesService();
    this.courses = this.courseService.list();
  }

  ngOnInit(): void {
  }

}
