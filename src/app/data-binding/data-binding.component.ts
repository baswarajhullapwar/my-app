import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Student } from '../student';
import { User } from '../user';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  public age: number = 22;
  public name: string = 'ram';
  public isindian: boolean = true;

  public phones: number[] = [6666, 3333, 6669];

  public courses: string[] = ['angular', 'react'];

  public user: User = { name: 'john', city: 'texas' };

  public student: Student = {
    name: 'ajay',
    id: 'n123',
    marks: 99,
  };

  public employee: Employee = {
    name: 'baswa',
    company: 'wipro',
    package: 15,
  };

  public users: User[] = [
    { name: 'baswa', city: 'hyd' },
    { name: 'teja', city: 'chennai' },
    { name: 'raj', city: 'nzb' },
    { name: 'shyam', city: 'bodhan' },
  ];

  public students: Student[] = [
    { name: 'anil', id: 'n123', marks: 90 },
    { name: 'baswa', id: 'n124', marks: 66 },
    { name: 'akhil', id: 'n125', marks: 44 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
