import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginUserComponent } from './pages/login-user/login-user.component';
import { LoginRestaurantComponent } from './pages/login-restaurant/login-restaurant.component';
import { LoginDriverComponent } from './pages/login-driver/login-driver.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { RegisterRestaurantComponent } from './pages/register-restaurant/register-restaurant.component';
import { RegisterDriverComponent } from './pages/register-driver/register-driver.component';
import { PagesnofoundComponent } from './pages/pagesnofound/pagesnofound.component';
import { DriversAvailableComponent } from './pages/drivers-available/drivers-available.component';
import { EditDischesComponent } from './pages/edit-disches/edit-disches.component';
import { EditProfileRestaurantComponent } from './pages/edit-profile-restaurant/edit-profile-restaurant.component';
import { HiDriverComponent } from './pages/hi-driver/hi-driver.component';
import { HiRestaurantComponent } from './pages/hi-restaurant/hi-restaurant.component';
import { HiUserComponent } from './pages/hi-user/hi-user.component';
import { LastOrdersComponent } from './pages/last-orders/last-orders.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenuRestaurantComponent } from './pages/menu-restaurant/menu-restaurant.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { OrderDetailsRestaurantComponent } from './pages/order-details-restaurant/order-details-restaurant.component';
import { OrderDetailsRestaurantDosComponent } from './pages/order-details-restaurant-dos/order-details-restaurant-dos.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { RestaurantMenuComponent } from './pages/restaurant-menu/restaurant-menu.component';
import { RestaurantOrdersComponent } from './pages/restaurant-orders/restaurant-orders.component';
import { TrackTheOrderComponent } from './pages/track-the-order/track-the-order.component';
import { YourOrderComponent } from './pages/your-order/your-order.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login-user', component: LoginUserComponent },
  { path: 'login-restaurant', component: LoginRestaurantComponent },
  { path: 'login-driver', component: LoginDriverComponent },
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'register-restaurant', component: RegisterRestaurantComponent },
  { path: 'register-driver', component: RegisterDriverComponent },
  { path: 'drivers-available', component: DriversAvailableComponent },
  { path: 'edit-disches', component: EditDischesComponent },
  { path: 'edit-profile-restaurant', component: EditProfileRestaurantComponent },
  { path: 'hi-driver', component: HiDriverComponent },
  { path: 'hi-restaurant', component: HiRestaurantComponent },
  { path: 'hi-user', component: HiUserComponent },
  { path: 'last-orders', component: LastOrdersComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menu-restaurant', component: MenuRestaurantComponent },
  { path: 'order-details', component: OrderDetailsComponent },
  { path: 'order-details-restaurant', component: OrderDetailsRestaurantComponent },
  { path: 'order-details-restaurant-dos', component: OrderDetailsRestaurantDosComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'restaurant-menu', component: RestaurantMenuComponent },
  { path: 'restaurant-orders', component: RestaurantOrdersComponent },
  { path: 'track-the-order', component: TrackTheOrderComponent },
  { path: 'your-order', component: YourOrderComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagesnofoundComponent }
];



export const AppRoutingModule = RouterModule.forRoot (routes, {useHash: true});
