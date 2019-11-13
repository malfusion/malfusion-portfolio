import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'about'
},{
  path: 'about',
  component: AboutPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
