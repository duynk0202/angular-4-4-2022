import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/layout/admin/admin.component';
import { UsersComponent } from './admin/pages/users/users.component';
import { ProductComponent } from './admin/pages/product/product.component';
import { RegisterComponent } from './admin/pages/auth/register/register.component';
import { LoginComponent } from './admin/pages/auth/login/login.component';
import { FlowerComponent } from './admin/pages/flower/flower.component';
import { LoginGuard } from './guard/login.guard';
import { CheckGuard } from './guard/check.guard';
const routes: Routes = [
  {
    redirectTo:'admin',
    path:'',
    pathMatch:'full'
  },
  {
    component:RegisterComponent,

    canActivate:[CheckGuard],
    path:'register',
  },
  {
    component:LoginComponent,

    canActivate:[CheckGuard],
    path:'login',

  },
  {
    component:AdminComponent,
    canActivate:[LoginGuard],
    path:'admin',
    children:[
      {
        component:UsersComponent,
        canActivate:[LoginGuard],
        path:'home'
      },{
        component:ProductComponent,
        canActivate:[LoginGuard],
        path:'qladmin'
      },
      {
        component:FlowerComponent,
        canActivate:[LoginGuard],
        path:'flower'
      }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
