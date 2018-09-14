import {Component, OnInit, OnDestroy} from '@angular/core';
import {CourseService} from "../../service/course.service";
import {Subscription} from "rxjs";
import { Course } from "../../models/course.model";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {
  public subscription: Subscription;
  public subscriptionDelete: Subscription;
  public courses: Course[];

  constructor(
    public courseService: CourseService,
  ) {
  }

  getCourseFromServer() {
    this.subscription = this.courseService.getAllCourses().subscribe((data: Course[]) => {
      this.courses = data;
    });
  }

  onDelete(id: number) {
    this.subscriptionDelete = this.courseService.removeItem(id).subscribe((data: Course) => {
      console.log(data);
      const index = this.courses.findIndex(item => {
        return item.id == id;
      });
      this.courses.splice(index, 1);
    });

  }

  ngOnInit() {
    this.getCourseFromServer();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
