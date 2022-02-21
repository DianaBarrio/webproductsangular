import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent} from './../componets/items/items.Component';
import { AdditemComponenet} from './componets/items/items.Component';

const routes: Routes = [
  {
    path:'',
    component: ItemsComponent
  },
  {
    path:'add',
    component: AdditemComponenet
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
