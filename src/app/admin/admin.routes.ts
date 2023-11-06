import {Routes} from '@angular/router';
import {AdminPage} from "./admin.page";

export const routes: Routes = [
	{
		path: 'admin',
		component: AdminPage,
		children: [
			{
				path: '',
				redirectTo: '/admin',
				pathMatch: 'full',
			},
		],
	},
];
