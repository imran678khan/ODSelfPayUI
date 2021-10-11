import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentComponent } from './pdf/document/document.component';

const routes: Routes = [
  {path:"", component:DashboardComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"document", component:DocumentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
