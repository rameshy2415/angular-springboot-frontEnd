import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//import start Material module 
import {MatCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatNativeDateModule} from '@angular/material';



//import End Material module 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { MasterPageComponent } from './master-page/master-page.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RestAPIService } from './services/rest-api.service';
import { RegistrationComponent } from './registration/registration.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component'
import {RegistrationserviceService} from './services/registrationservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {FreeAPIserviceService} from './services/free-apiservice.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {LoginService} from './services/login.service';
import { EmployeeComponent } from './report/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    MasterPageComponent,
    NavComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    TicketBookingComponent,
    PageNotFoundComponent,
    EmployeeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [RestAPIService,RegistrationserviceService,FreeAPIserviceService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
