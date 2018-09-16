import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Course } from "../models/course.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  public API: string = 'http://5b9615e052764b001413bba1.mockapi.io/courses';
  constructor(
   public http:HttpClient
  ) {}

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.API);
  }
  addNewCourse(course: Course): Observable<Course> {
    // @ts-ignored
    return this.http.post(this.API,course);
  }
  removeItem(id:number): Observable<Course> {
    // @ts-ignored
      return this.http.delete(`${this.API}/${id}`);
  }
  // load one data
  getCourse(id:number): Observable<Course> {
    return this.http.get<Course>(`${this.API}/${id}`);
  }
  // update course
  updateCourse(course: Course): Observable<Course>{
    return this.http.put<Course>(`${this.API}/${course.id}`,course);
  }
}
