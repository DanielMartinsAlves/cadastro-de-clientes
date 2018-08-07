
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const rotas: Routes= [
 // { path: 'starter', component: StarterContentComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(rotas, { useHash: true })
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
