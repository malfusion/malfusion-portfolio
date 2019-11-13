import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomeComponent } from './home/home.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';


const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'about'
},
{
  path: 'about',
  component: AboutPageComponent
},
{
  path: 'projects',
  component: ProjectsPageComponent
},
{
  path: 'contact',
  component: ContactPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
