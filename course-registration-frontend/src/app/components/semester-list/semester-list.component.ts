// semester-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Semester } from '../../models/semester.model';
import { SemesterService } from '../../services/semester.service';


@Component({
  selector: 'app-semester-list',
  templateUrl: './semester-list.component.html',
  styleUrls: ['./semester-list.component.css']
})
export class SemesterListComponent implements OnInit {
  semesters: Semester[] = [];

  constructor(private semesterService: SemesterService) {}

  ngOnInit(): void {
    this.loadSemesters();
  }

  loadSemesters(): void {
    this.semesterService.getAllSemesters().subscribe((data) => {
      this.semesters = data;
    });
  }
}
