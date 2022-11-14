import { Injectable } from '@angular/core';
import { Emp } from '../models/emp';

@Injectable({
  providedIn: 'root'
})
export class EmpsService {

  emps: Emp[];

  constructor() {
    this.emps = [
      { id: 1, fullName: "Vamsy", mail: "vamsy@gmail.com", mobile: "9052224753", salary: 45000, deptId: 1 },
      { id: 2, fullName: "Srinivas", mail: "sri@gmail.com", mobile: "9051114753", salary: 55000, deptId: 1 },
      { id: 3, fullName: "Anu", mail: "anu@gmail.com", mobile: "9050004753", salary: 65000, deptId: 2 },
      { id: 4, fullName: "Sunil", mail: "sun@gmail.com", mobile: "9054444753", salary: 75000, deptId: 2 }
    ];
  }

  getAllByDeptId(deptId: number): Emp[] {
    return [...this.emps.filter(e => e.deptId == deptId)];
  }

  getById(id: number): Emp | undefined {
    return this.emps.find(e => e.id == id);
  }

  add(emp: Emp): Emp {
    this.emps.push(emp);
    return emp;
  }

  update(emp: Emp): Emp {
    let index = this.emps.findIndex(e => e.id === emp.id);
    if (index > -1) {
      this.emps[index] = emp;
    }
    return emp;
  }

  deleteById(id: number): void {
    let index = this.emps.findIndex(e => e.id === id);
    if (index > -1) {
      this.emps.splice(index, 1);
    }
  }
}
