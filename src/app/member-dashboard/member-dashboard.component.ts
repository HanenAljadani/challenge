import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, TemplateRef, ViewChild } from '@angular/core';
import { member } from '../API/member-interface.model';

@Component({
  selector: 'app-member-dashboard',
  standalone: false,
  templateUrl: './member-dashboard.component.html',
  styleUrl: './member-dashboard.component.css',
})
export class MemberDashboardComponent {
  roleFilter: String = '';
  statusFilter: String = '';
  @ViewChild('performanceTemplate', { static: true })
  performanceTemplate!: TemplateRef<any>;

  columns: any[] = [];
  rows: member[] = [];

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.columns = [
      { prop: 'name', name: 'Name' },
      { prop: 'role', name: 'Role' },
      { prop: 'status', name: 'Status' },
      { prop: 'performence',name: 'Performance Check', cellTemplate: this.performanceTemplate },
    ];
    this.getMembers();
    this.cdr.detectChanges();
  }
  getMembers() {
    this.http
      .get<member[]>('/assets/data/members.json')
      .subscribe((data) => (this.rows = data));
  }
  handleStatus(option: String) {
    this.statusFilter = option;
  }

  handleRole(option: String) {
    this.roleFilter = option;
  }

  handleClearButton() {
    this.roleFilter = '';
    this.statusFilter = '';
  }

  filterData(): member[] {
    if (this.roleFilter == '' && this.statusFilter == '') {
      return this.rows;
    } else {
      if (this.roleFilter != '' && this.statusFilter != '') {
        return this.rows.filter(
          (rows) =>
            rows['role'] == this.roleFilter &&
            rows['status'] == this.statusFilter
        );
      }
      if (this.roleFilter != '') {
        return this.rows.filter((rows) => rows['role'] == this.roleFilter);
      }
      if (this.statusFilter != '') {
        return this.rows.filter((rows) => rows['status'] == this.statusFilter);
      }
    }
    return this.rows;
  }
}
