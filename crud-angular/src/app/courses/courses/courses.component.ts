import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';


import { Course } from '../model/course';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  //variável renomeado para obedecer a padronização
  courses$: Observable<Course[]>;
  displayedColumns = ['_id','name', 'category']; //define quais campos vão ser exibidos do array

  //abaixo há uma injeção de dependência
  constructor(
    private courseService: CoursesService,
    public dialog: MatDialog
    ) {
    //this.courses = [];
    // this.courseService = new CoursesService();
    this.courses$ = this.courseService.list()
    .pipe(
      catchError(error => {
        this.onError("Erro interno do servidor")
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {
  }

}
