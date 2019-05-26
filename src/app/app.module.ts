import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTasksComponent } from './new-tasks/new-tasks.component';
import { Routes, RouterModule} from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from 'src/services/auth.services';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpConfigInterceptor } from 'src/services/interceptor';

const appRoutes:Routes = [
  {path:"login",component:LoginComponent},
  {path:"tasks",component:TasksComponent},
  {path:"new-task",component:NewTasksComponent},
  {path:"register",component:RegisterComponent},
  {path:"",redirectTo:"login",pathMatch:"full"}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TasksComponent,
    NewTasksComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),FormsModule,HttpClientModule
  ],
  providers: [AuthService,{ provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
