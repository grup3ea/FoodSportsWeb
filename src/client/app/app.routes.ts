import { Routes } from '@angular/router';

import { HelloRoutes} 			from './hello/hello.routes';
import { DashboardRoutes }		from './dashboard/index';

import { HelloComponent } 		from './hello/hello.component';


export const routes: Routes = [
	...HelloRoutes,
	...DashboardRoutes,
	{ path: '**', component: HelloComponent},
];
