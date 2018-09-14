import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseAddComponent } from './components/course-add/course-add.component';
import { CourseEditComponent } from './components/course-edit/course-edit.component';
// Service
import { CourseService } from "./service/course.service";
// course routes
import { CourseRoutes } from "./course-management.routes";
import { DateConvertPipe } from './pipes/date-convert.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(CourseRoutes)
  ],
  declarations: [
    CourseListComponent,
    CourseAddComponent,
    CourseEditComponent,
    DateConvertPipe,
  ],
  providers: [CourseService]
})
export class CourseManagementModule { }
