import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AddComputerComponent } from './components/add-computer/add-computer.component';
import { DetailsComputerComponent } from './components/details-computer/details-computer.component';
import { EditComputerComponent } from './components/edit-computer/edit-computer.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AccueilComponent },
  { path: 'add', component: AddComputerComponent },
  { path: 'edit/:id', component: EditComputerComponent },
  { path: 'computers/:id', component: DetailsComputerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
