import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './public/about/about.component';
import { ContactComponent } from './public/contact/contact.component';
import { HomeComponent } from './public/home/home.component';
import { ResourcesComponent } from './public/resources/resources.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'resources', component: ResourcesComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'contact', component: ContactComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
