import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms';
import { MatMenuModule} from '@angular/material/menu';
import { MainComponent } from './main/main.component';
import { RegistrationComponent } from './registration/registration.component';
import {RouterModule, Router, Routes} from '@angular/router';
import { MaterialModule } from '../material.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './home/home.component';




const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  declarations: [

    AppComponent,
    MainComponent,
    RegistrationComponent,
    HomeComponent


  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatMenuModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
