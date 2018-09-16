import {Component, DoCheck, OnDestroy, OnInit} from '@angular/core';
import { Course } from "../../models/course.model";
import { Router,ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { CourseService } from "../../service/course.service";

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit,OnDestroy, DoCheck {
  public course: Course = new Course();
  public subscription: Subscription;
  public subscriptionParams: Subscription;
  constructor(
    public courseService: CourseService,
    public routerService: Router,
    public activateService: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
      this.subscriptionParams = this.activateService.params.subscribe(data => {
            let idEdit = data['id'];
            this.subscription = this.courseService.getCourse(idEdit).subscribe(courseItem => {
                this.course = courseItem;
              }
            );
          }
      );
  }

  onEdit(){
    console.log(this.course);
     this.subscription = this.courseService.updateCourse(this.course).subscribe((data: Course)=> {
        console.log(data);
        this.routerService.navigateByUrl('/courses');
     },error => {
        console.log(error);
     });
  }

  ngOnDestroy() {
      if (this.subscription) {
          this.subscription.unsubscribe();
      }
      if (this.subscriptionParams) {
        this.subscriptionParams.unsubscribe();
      }
  }

  ngDoCheck(): void {
    // console.log(this.course);
  }

}
