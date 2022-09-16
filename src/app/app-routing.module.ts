import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BankaccountComponent } from './bankaccount/bankaccount.component';

import { CalculatorComponent } from './calculator/calculator.component';
import { CarComponent } from './car/car.component';
import { CartComponent } from './cart/cart.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { ChildComponent } from './child/child.component';
import { ClientComponent } from './client/client.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreatevehicleComponent } from './createvehicle/createvehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EmailComponent } from './email/email.component';
import { EmployeesComponent } from './employees/employees.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { GpayComponent } from './gpay/gpay.component';

import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ParentComponent } from './parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { ProductComponent } from './product/product.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { SquareComponent } from './square/square.component';
import { StarComponent } from './star/star.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard], children:[
    {path:'home', component:HomeComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'square',component:SquareComponent},
    {path:'databinding',component:DataBindingComponent},
    {path:'eventbinding',component:EventbindingComponent},
    {path:'twowaybinding',component:TwowaybindingComponent},
    {path:'rectangle',component:RectangleComponent},
    {path:'event-registration',component:EventRegistrationComponent},
    {path:'student-registration',component:StudentRegistrationComponent},
    {path:'cart',component:CartComponent},
    {path:'pipes',component:PipesComponent},
    {path:'employees',component:EmployeesComponent},
    {path:'cars',component:CarComponent},
    {path:'gpay',component:GpayComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'bankaccount',component:BankaccountComponent},
    {path:'item',component:ItemComponent},
    {path:'socialmedia',component:SocialmediaComponent},
    {path:'email',component:EmailComponent},
    {path:'client',component:ClientComponent},
    {path:'createvehicle',component:CreatevehicleComponent,canDeactivate:[NotifyGuard]},
    {path:'create-user',component:CreateUserComponent},
    {path:'parent',component:ParentComponent},
    {path:'child',component:ChildComponent},
    {path:'star',component:StarComponent},
    {path:'product',component:ProductComponent},
    {path:'cartlist',component:CartlistComponent},
    {path:'nav',component:NavComponent},
    {path:'vehicle-details/:id',component:VehicleDetailsComponent}

    

   
    
  ]},
  {path:'',component:LoginComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
