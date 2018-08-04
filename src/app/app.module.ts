import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { AboutComponent } from './components/about/about.component';
import { DesignsComponent } from './components/designs/designs.component';
import { CodeComponent } from './components/code/code.component';

const appRoutes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'projects', component: AllProjectsComponent},
  {path: 'code', component: CodeComponent},
  {path: 'designs', component: DesignsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AllProjectsComponent,
    AboutComponent,
    DesignsComponent,
    CodeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
