import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameComponent} from "./game/game.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // {
  //   path: 'home',
  //   component:
  // },

  // {
  //   path: 'lobby',
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: 'join',
  //       pathMatch: 'full'
  //     },
  //     {
  //       path: 'join',
  //       component:
  //     },
  //     {
  //       path: ':id',
  //       component:
  //     },
  //   ]
  // },

  {
    path: 'game',
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: GameComponent
      },
    ]
  },

  {
    path: '**', redirectTo:'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
