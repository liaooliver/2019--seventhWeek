import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../app/pages/main/main.component';
import { ChatComponent } from '../app/pages/chat/chat.component';

const routes: Routes = [
  {
    path:"home",
    component:MainComponent
  },
  {
    path:"rooms/:id",
    component:ChatComponent
  },
  {
    path:"**",
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
