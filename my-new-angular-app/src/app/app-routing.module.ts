import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { HeroesFormComponent } from './heroes-form/heroes-form.component';

const routes: Routes = [
 { path: 'form', component: SignUpFormComponent },
 { path: 'heroes-form', component: HeroesFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
