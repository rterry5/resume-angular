import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './components/contact/contact/contact-form/contact-form.component';
import { ContactComponent } from './components/contact/contact/contact.component';
import { HomepageComponent } from './components/homepage/homepage/homepage.component';
import { AboutComponent } from './components/about/about/about.component';
import { ProjectsComponent } from './components/projects/projects/projects.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
