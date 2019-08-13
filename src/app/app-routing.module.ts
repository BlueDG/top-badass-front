import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterComponent } from './character/character.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: '', 
  component: HomeComponent, 
  children: [
    { path: 'home', 
    component: HomeComponent 
    }, 
    { path: 'list', 
    component: CharacterListComponent 
    },

    ] 
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
