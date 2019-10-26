import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypageAttributesComponent } from './components/typage-attributes/typage-attributes.component';


const routes: Routes = [
  { path: "typage", component: TypageAttributesComponent },
  { path: "", pathMatch: "full", redirectTo: "/typage" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
