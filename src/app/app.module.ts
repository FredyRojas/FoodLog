import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { HeaderComponent } from './pages/header/header.component';
import { LoginUserComponent } from './pages/login-user/login-user.component';
import { LoginRestaurantComponent } from './pages/login-restaurant/login-restaurant.component';
import { LoginDriverComponent } from './pages/login-driver/login-driver.component';
import { PagesnofoundComponent } from './pages/pagesnofound/pagesnofound.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { RegisterRestaurantComponent } from './pages/register-restaurant/register-restaurant.component';
import { RegisterDriverComponent } from './pages/register-driver/register-driver.component';
import { FooterComponent } from './pages/footer/footer.component';
import { PagesComponent } from './pages/pages.component';
import { DriversAvailableComponent } from './pages/drivers-available/drivers-available.component';
import { EditDischesComponent } from './pages/edit-disches/edit-disches.component';
import { EditProfileRestaurantComponent } from './pages/edit-profile-restaurant/edit-profile-restaurant.component';
import { HiRestaurantComponent } from './pages/hi-restaurant/hi-restaurant.component';
import { HiUserComponent } from './pages/hi-user/hi-user.component';
import { HiDriverComponent } from './pages/hi-driver/hi-driver.component';
import { LastOrdersComponent } from './pages/last-orders/last-orders.component';
import { MenuRestaurantComponent } from './pages/menu-restaurant/menu-restaurant.component';
import { MenuComponent } from './pages/menu/menu.component';
import { OrderDetailsRestaurantDosComponent } from './pages/order-details-restaurant-dos/order-details-restaurant-dos.component';
import { OrderDetailsRestaurantComponent } from './pages/order-details-restaurant/order-details-restaurant.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { RestaurantMenuComponent } from './pages/restaurant-menu/restaurant-menu.component';
import { RestaurantOrdersComponent } from './pages/restaurant-orders/restaurant-orders.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { TrackTheOrderComponent } from './pages/track-the-order/track-the-order.component';
import { YourOrderComponent } from './pages/your-order/your-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProgressComponent,
    HeaderComponent,
    LoginUserComponent,
    LoginRestaurantComponent,
    LoginDriverComponent,
    PagesnofoundComponent,
    RegisterUserComponent,
    RegisterRestaurantComponent,
    RegisterDriverComponent,
    FooterComponent,
    PagesComponent,
    DriversAvailableComponent,
    EditDischesComponent,
    EditProfileRestaurantComponent,
    HiRestaurantComponent,
    HiUserComponent,
    HiDriverComponent,
    LastOrdersComponent,
    MenuRestaurantComponent,
    MenuComponent,
    OrderDetailsRestaurantDosComponent,
    OrderDetailsRestaurantComponent,
    OrderDetailsComponent,
    PaymentComponent,
    RestaurantMenuComponent,
    RestaurantOrdersComponent,
    RestaurantComponent,
    TrackTheOrderComponent,
    YourOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
