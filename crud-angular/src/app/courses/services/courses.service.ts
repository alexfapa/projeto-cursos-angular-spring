import { Injectable } from '@angular/core';

import { Course } from './../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  list(): Course[] { //pode ser tipado ou não
    return [
      {_id: '1', name: 'Spring Boot', category: 'Back-end'},
      {_id: '2', name: 'Angular', category: 'Front-end'},
      {_id: '3', name: 'Docker', category: 'DevOps'}
    ];
  }
}
