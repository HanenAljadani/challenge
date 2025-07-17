import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';
import { DropdownMenuComponent } from './components/dropdown-menu/dropdown-menu.component';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MemberDashboardComponent,
    DropdownMenuComponent,
    NavBarComponent,
    LandingPageComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
