import {Component, OnDestroy, OnInit} from '@angular/core';
import { Course } from "../../../models/course.model";
import { Subscription } from "rxjs";
import { CourseService } from "../../service/course.service";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {validate} from "codelyzer/walkerFactory/walkerFn";

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls:['./course-add.component.css']
})
export class CourseAddComponent implements OnInit,OnDestroy {

  public course: Course;
  public subscription: Subscription;
  public formUser: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    public location: Location,
    public courseService: CourseService,
    public courseRoutes: Router
  ) { }

  ngOnInit() {
    this.course = new Course();
    this.createForm();
  }

  // Form
  createForm(){
      this.formUser = this._formBuilder.group({
        userName: ['',[
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20)
        ]],
        userPrice: ['',[
          Validators.required,
        ]],
        userDescription: ['',[
          Validators.required,
        ]],
      })
  }

  onSubmitForm() {
    console.log(this.formUser);
  }
  // reset form
  onResetForm(){
    this.formUser.reset();
  }

  // get back to the list
  goBack() {
    this.location.back();
  }
  onAddCourse() {
    this.subscription = this.courseService.addNewCourse(this.course).subscribe(
      data => {
        if (data && data.id) {
          this.goBack();
        }
      }
    );
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
