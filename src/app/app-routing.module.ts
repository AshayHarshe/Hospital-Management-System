import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  {
    path:'doctors',
    component:DoctorsComponent
  },
  {
    path:'patient',
    component:PatientsComponent
  },
  {
    path:'staff',
    component:StaffComponent
  },
  {
    path:'billing',
    component:BillingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
