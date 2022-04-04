import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/layout/admin/admin.component';
import { FooterComponent } from './admin/layout/includes/footer/footer.component';
import { HeaderComponent } from './admin/layout/includes/header/header.component';
import { UsersComponent } from './admin/pages/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './admin/pages/product/product.component';
import { RegisterComponent } from './admin/pages/auth/register/register.component';
import { LoginComponent } from './admin/pages/auth/login/login.component';
import { FlowerComponent } from './admin/pages/flower/flower.component';
import { FormComponent } from './admin/pages/flower/child/form/form.component';
import { ListComponent } from './admin/pages/flower/child/list/list.component';
import { HightlightDirective } from './directive/hightlight.directive';
import { Form2Component } from './admin/pages/product/child/form2/form2.component';
import { List2Component } from './admin/pages/product/child/list2/list2.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    FooterComponent,
    HeaderComponent,
    UsersComponent,
    ProductComponent,
    RegisterComponent,
    LoginComponent,
    FlowerComponent,
    FormComponent,
    ListComponent,
    HightlightDirective,
    Form2Component,
    List2Component,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
