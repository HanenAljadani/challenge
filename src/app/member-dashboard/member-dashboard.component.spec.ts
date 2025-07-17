import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDashboardComponent } from './member-dashboard.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DropdownMenuComponent } from '../components/dropdown-menu/dropdown-menu.component';
import { ButtonComponent } from '../components/button/button.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('MemberDashboardComponent', () => {
  let component: MemberDashboardComponent;
  let fixture: ComponentFixture<MemberDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MemberDashboardComponent,
        DropdownMenuComponent,
        ButtonComponent,
      ],
      imports: [HttpClientTestingModule, NgxDatatableModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MemberDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display two filters', () => {
    const options = fixture.debugElement.queryAll(By.css('app-dropdown-menu'));
    expect(options.length).toBe(2);
  });

  it('should display the correct number and value of options', () => {
    const options = fixture.debugElement.queryAll(By.css('app-dropdown-menu'));
    const roleFilter = options[0];
    const roleOptions = roleFilter.queryAll(By.css('.dropdown-item '));
    expect(roleOptions.length).toBe(7);

    expect(roleOptions[0].nativeElement.textContent).toContain('Developer');
  });

  it('should display the correct number and value of options', () => {
    const options = fixture.debugElement.queryAll(By.css('app-dropdown-menu'));
    const statusFilter = options[1];
    const statusOptions = statusFilter.queryAll(By.css('.dropdown-item '));
    expect(statusOptions.length).toBe(2);

    expect(statusOptions[0].nativeElement.textContent).toContain('active');
  });
});
