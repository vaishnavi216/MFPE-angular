import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumerDetailsComponent } from './components/consumer-details/consumer-details.component';
import { CreateDetailsComponent } from './components/consumer-details/create-details/create-details.component';
import { ViewDetailsComponent } from './components/consumer-details/view-details/view-details.component';
import { UpdateDetailsComponent } from './components/consumer-details/update-details/update-details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreatepolicyComponent } from './createpolicy/createpolicy.component';
import { IssuepolicyComponent } from './issuepolicy/issuepolicy.component';
import { ViewpolicyComponent } from './viewpolicy/viewpolicy.component';
import { ViewquotesComponent } from './viewquotes/viewquotes.component';
import {BusinessDetailsCreateComponent} from './business-details-create/business-details-create.component';
import {BusinessDetailsUpdateComponent} from './business-details-update/business-details-update.component';
import {BusinessDetailsViewComponent} from './business-details-view/business-details-view.component';
import{Logout} from './services/logout.service';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'consumer-details', component: ConsumerDetailsComponent,canActivate:[Logout] },
  { path:'consumer-details/create', component: CreateDetailsComponent,canActivate:[Logout] },
  { path:'consumer-details/view/:id', component: ViewDetailsComponent,canActivate:[Logout] },
  { path:'consumer-details/update/:id', component: UpdateDetailsComponent,canActivate:[Logout] },
  { path:'dashboard', component: DashboardComponent,canActivate:[Logout]},
  {path:'createpolicy',component:CreatepolicyComponent,canActivate:[Logout]},
  {path:'issuepolicy',component:IssuepolicyComponent,canActivate:[Logout]},
  {path:'viewpolicy',component:ViewpolicyComponent,canActivate:[Logout]},
  {path:'viewquotes',component:ViewquotesComponent,canActivate:[Logout]},
  {path:'viewbusiness' ,component:BusinessDetailsViewComponent,canActivate:[Logout]},
  {path:'createbusiness',component:BusinessDetailsCreateComponent,canActivate:[Logout]},
  {path:'updatebusiness',component:BusinessDetailsUpdateComponent,canActivate:[Logout]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
