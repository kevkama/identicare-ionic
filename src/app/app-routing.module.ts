import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'splash',
    loadChildren: () => import('./libs/splash-screen/splash-screen.module').then( m => m.SplashScreenModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./libs/info/info.module').then( m => m.InfoModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./libs/authentification/authentification.module').then( m => m.AuthentificationModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./libs/home/home.module').then( m => m.HomePageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
