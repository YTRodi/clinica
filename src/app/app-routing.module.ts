import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // TODO: pending implementation
  // { path: '', pathMatch: 'full', redirectTo: 'welcome' },
  // {
  //   path: 'welcome',
  //   loadChildren: () =>
  //     import('@public/public.module').then(({ PublicModule }) => PublicModule),
  // },
  // { path: '', pathMatch: 'full', redirectTo: 'auth/login' },
  {
    path: '',
    loadChildren: () =>
      import('@auth/auth.module').then(({ AuthModule }) => AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
