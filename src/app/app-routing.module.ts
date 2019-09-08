import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JavascriptComponent } from './javascript/javascript.component';
import { HakunaComponent } from './hakuna/hakuna.component'
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  {path:'thumbnails', component:ThumbnailsComponent},
  {path:'hakuna', component:HakunaComponent},
  {path:'javascript', component:JavascriptComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
