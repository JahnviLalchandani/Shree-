import { Routes } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from './auth/auth.component';

import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path:'auth',
        component:AuthComponent,
        children:[
            {
                title:'Registration',
                path:'registration',
                component:RegistrationComponent
            },
            {
                title:'Login',
                path:'login',
                component:LoginComponent
            },
            {
                path:'**',
                redirectTo:'login'
            }
        ]

    },
    {
        path:'app',
        component:PagesComponent,
        children:[
            {
                title:'Home',
                path:'home',
                component:HomeComponent
    
            },         
                      
            {
                path:'**',
                redirectTo:'home'
            }
        ]
    },
      
    {
        path:'**',
        redirectTo:'auth'
    }
];
