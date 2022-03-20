import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./features/master-page/master-page.module').then(m => m.MasterPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./shared/auth/components/sign-in/sign-in.module').then(m => m.SignInModule)
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
