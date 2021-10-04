import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  // { path: '', component: DashboardComponent },
  // { path: 'add', component: AddNewCarComponent },
  // { path: '*', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule {}
