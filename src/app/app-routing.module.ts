import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'about_me',
    redirectTo: 'about-me',
    pathMatch: 'full'
  },
  {
    path: 'resumen',
    redirectTo: 'resumen',
    pathMatch: 'full'
  },
  {
    path: 'projects',
    redirectTo: 'projects',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
