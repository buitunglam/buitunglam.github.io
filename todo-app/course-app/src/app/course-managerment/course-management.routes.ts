import { Routes } from "@angular/router";
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseAddComponent } from './components/course-add/course-add.component';
import { CourseEditComponent } from './components/course-edit/course-edit.component';
import {CoursesComponent} from "./components/courses/courses.component";
import { LoginAdminGuard } from "../login-admin.guard";

export const CourseRoutes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent,
    canActivate: [LoginAdminGuard],
    children: [
      {
        path:'',
        component:CourseListComponent
      },
      {
        path:'add',
        component: CourseAddComponent
      },
      {
        path:':id/edit',
        component: CourseEditComponent
      },
    ]
  },
];
