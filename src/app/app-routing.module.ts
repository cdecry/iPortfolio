import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
    { path: '' , redirectTo: 'home', pathMatch: 'full' },
    { path: 'home' , component: HomeComponent },
    { path: 'about-me' , component: AboutMeComponent },
    { path: 'resume' , component: ResumeComponent },
    { path: 'settings' , component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, AboutMeComponent, ResumeComponent, SettingsComponent];