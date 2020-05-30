import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


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
  },
  {
    path: '**', 
    component: PageNotFoundComponent
},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
