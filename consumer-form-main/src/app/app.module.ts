import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';
import { ConsumerDetailsComponent } from './components/consumer-details/consumer-details.component';
import { CreateDetailsComponent } from './components/consumer-details/create-details/create-details.component';
import { HomeComponent } from './components/home/home.component';
import { ViewDetailsComponent } from './components/consumer-details/view-details/view-details.component';
import { UpdateDetailsComponent } from './components/consumer-details/update-details/update-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// styling modules
//MatModules
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

import { CreatepolicyComponent } from './createpolicy/createpolicy.component';
import { IssuepolicyComponent } from './issuepolicy/issuepolicy.component';
import { ViewpolicyComponent } from './viewpolicy/viewpolicy.component';
import { ViewquotesComponent } from './viewquotes/viewquotes.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BusinessDetailsCreateComponent } from './business-details-create/business-details-create.component';
import { BusinessDetailsUpdateComponent } from './business-details-update/business-details-update.component';
import { BusinessDetailsViewComponent } from './business-details-view/business-details-view.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConsumerDetailsComponent,
    CreateDetailsComponent,
    HomeComponent,
    ViewDetailsComponent,
    UpdateDetailsComponent,
    DashboardComponent,
    CreatepolicyComponent,
    IssuepolicyComponent,
    ViewpolicyComponent,
    ViewquotesComponent,
    SidenavComponent,
    BusinessDetailsCreateComponent,
    BusinessDetailsUpdateComponent,
    BusinessDetailsViewComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
