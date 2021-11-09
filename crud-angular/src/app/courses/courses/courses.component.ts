import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Observable<Course[]>;
  displayedColumns = ['_id','name', 'category']; //define quais campos vão ser exibidos do array

  //abaixo há uma injeção de dependência
  constructor(private courseService: CoursesService) {
    //this.courses = [];
    // this.courseService = new CoursesService();
    this.courses = this.courseService.list();
  }

  ngOnInit(): void {
  }

}
