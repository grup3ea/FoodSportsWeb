import { NgModule }		    from '@angular/core';
import { BrowserModule }	from '@angular/platform-browser';
import { APP_BASE_HREF }    from '@angular/common';
import { RouterModule }	    from '@angular/router';
import { HttpModule } 		from '@angular/http';
import { AppComponent } 	from './app.component';
import { routes } 			from './app.routes';

import { LoginModule } 		from './login/login.module';
import { DashboardModule }  from './dashboard/dashboard.module';
import { SharedModule } 	from './shared/shared.module';
import { HelloModule } 		from './hello/hello.module';
import { RegisterModule }   from './register/register.module';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		RouterModule.forRoot(routes),
		LoginModule,
		RegisterModule,
		HelloModule,
		DashboardModule,
		SharedModule.forRoot()
	],
	declarations: [AppComponent],
	providers: [{
		provide: APP_BASE_HREF,
		useValue: '<%= APP_BASE %>'
	}],
	bootstrap: [AppComponent]

})

export class AppModule { }
