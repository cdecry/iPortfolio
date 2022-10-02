import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
    { path: '' , redirectTo: 'home', pathMatch: 'full', data: { animation: 'HomePage' } },
    { path: 'home' , component: HomeComponent, data: { animation: 'HomePage' } },
    { path: 'about-me' , component: AboutMeComponent, data: { animation: 'AboutMePage' } },
    { path: 'resume' , component: ResumeComponent, data: { animation: 'ResumePage' } },
    { path: 'settings' , component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, AboutMeComponent, ResumeComponent, SettingsComponent];