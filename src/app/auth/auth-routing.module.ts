import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@shared/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('@auth/unauthenticated/unauthenticated.module').then(
        ({ UnauthenticatedModule }) => UnauthenticatedModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('@auth/authenticated/authenticated.module').then(
        ({ AuthenticatedModule }) => AuthenticatedModule
      ),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
