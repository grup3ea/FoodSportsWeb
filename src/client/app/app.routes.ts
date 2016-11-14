import { Routes } from '@angular/router';

import { LoginRoutes } 			from './login/index';
import { HelloRoutes} 			from './hello/hello.routes';
import { RegisterRoutes } 		from './register/register.routes';
import { DashboardRoutes }		from './dashboard/index';

import { LoginComponent }  		from './login/index';
import { RegisterComponent }	from './register/register.component';
import  {HelloComponent } 		from './hello/hello.component';


export const routes: Routes = [
	...RegisterRoutes,
	...HelloRoutes,
	...LoginRoutes,
	...DashboardRoutes,
	{ path: '**', component: HelloComponent},
	{ path: '/login', component: LoginComponent},
	{ path: '/register', component: RegisterComponent}
];
