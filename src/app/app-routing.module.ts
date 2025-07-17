import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberDashboardComponent } from './member-dashboard/member-dashboard.component';
import { LandingPageComponent } from './home/landing-page/landing-page.component';

const routes: Routes = [
  { path: 'dashboard', component: MemberDashboardComponent },
  { path: 'home', component: LandingPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
