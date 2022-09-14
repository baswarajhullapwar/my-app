import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SquareComponent } from './square/square.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { CartComponent } from './cart/cart.component';
import { EmployeesComponent } from './employees/employees.component';
import { PipesComponent } from './pipes/pipes.component';
import { PricePipe } from './price.pipe';
import { PackagePipe } from './package.pipe';
import { AgePipe } from './age.pipe';
import { CarComponent } from './car/car.component';
import { GpayComponent } from './gpay/gpay.component';
import { HighlightDirective } from './highlight.directive';
import{HttpClientModule} from '@angular/common/http';
import { VehicleComponent } from './vehicle/vehicle.component';
import { BankaccountComponent } from './bankaccount/bankaccount.component';
import { ItemComponent } from './item/item.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { EmailComponent } from './email/email.component';
import { ClientComponent } from './client/client.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { CreateUserComponent } from './create-user/create-user.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    CalculatorComponent,
    SquareComponent,
    DataBindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    RectangleComponent,
    EventRegistrationComponent,
    StudentRegistrationComponent,
    CartComponent,
    EmployeesComponent,
    PipesComponent,
    PricePipe,
    PackagePipe,
    AgePipe,
    CarComponent,
    GpayComponent,
    HighlightDirective,
    VehicleComponent,
    BankaccountComponent,
    ItemComponent,
    SocialmediaComponent,
    EmailComponent,
    ClientComponent,
    CreatevehicleComponent,
    CreateUserComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
