// enrollment-list.component.ts
import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../services/enrollment.service';
import { Enrollment } from '../models/enrollment.model';

@Component({
  selector: 'app-enrollment-list',
  templateUrl: './enrollment-list.component.html',
  styleUrls: ['./enrollment-list.component.css']
})
export class EnrollmentListComponent implements OnInit {
  enrollments: Enrollment[] = [];

  constructor(private enrollmentService: EnrollmentService) {}

  ngOnInit(): void {
    this.loadEnrollments();
  }

  loadEnrollments(): void {
    this.enrollmentService.getEnrollments().subscribe((data) => {
      this.enrollments = data;
    });
  }
}
