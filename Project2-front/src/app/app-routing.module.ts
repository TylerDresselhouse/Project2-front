// Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './components/private/private.component';
import { LoginComponent } from './components/login/login.component';
import { SwimLanesComponent } from './components/swim-lanes/swim-lanes.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { InviteComponent } from './components/invite/invite.component';
import { TaskComponent } from './components/task/task.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'private', component: PrivateComponent },
    { path: 'swim-lanes/:id', component: SwimLanesComponent },
    { path: 'card', component: CardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'invite', component: InviteComponent},
    { path: 'task', component: TaskComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
