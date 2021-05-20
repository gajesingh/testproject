import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { SubmitComponent } from './submit/submit/submit.component';
import { ViewListComponent } from './list/view-list/view-list.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'submit',
      component: SubmitComponent
  },
  {
    path: 'view-list',
    component: ViewListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
