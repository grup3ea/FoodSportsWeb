import { Route } from '@angular/router';
import { HelloComponent } from './index';
import {LoginRoutes} from './login/login.routes';
import {RegisterRoutes} from './register/register.routes';

export const HelloRoutes: Route[] = [
    {
        path: 'hello',
        component: HelloComponent,
        children: [
            ...LoginRoutes,
            ...RegisterRoutes
        ]
    }
];
