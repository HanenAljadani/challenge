import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { member } from '../API/member-interface.model';

@Component({
  selector: 'app-member-dashboard',
  standalone: false,
  templateUrl: './member-dashboard.component.html',
  styleUrl: './member-dashboard.component.css'
})
export class MemberDashboardComponent {
  roleFilter: String = ""
  statusFilter: String = ""
  
  columns = [
      { prop: 'name', name: 'Name' },
      { prop: 'role', name: 'Role' },
      { prop: 'status', name: 'Status' },
      { prop: 'Per', name: 'PerCHECK' },
    ];

    rows: member[] = [];
    constructor(private http: HttpClient){}

    ngOnInit(): void {
      this.http.get<member[]>('/assets/data/members.json')
      .subscribe(data=>
        this.rows= data
      )
    }

    handleStatus(option: String){
      this.statusFilter = option
    }

    handleRole(option: String){
      this.roleFilter = option;

    }

    clear(){
      this.roleFilter = ""
      this.statusFilter = ""
    }
    filterData(): member[]{
      if(this.roleFilter == "" && this.statusFilter == ""){
        return this.rows;
      }else {
        if(this.roleFilter != ""){
        return this.rows.filter(rows => rows["role"] == this.roleFilter)
        }
        if(this.statusFilter != ""){
         // return this.rows.filter()
        }
      }
      return this.rows;

    }
    

}
