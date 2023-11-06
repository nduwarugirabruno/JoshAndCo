import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
	},
	{
		path: 'home',
		loadComponent: () => import('./home/home.page').then(m => m.HomePage)
	},
  {
    path: 'detail-rehearsal-house',
    loadComponent: () => import('./rehearsal-house/detail-rehearsal-house/detail-rehearsal-house.page').then( m => m.DetailRehearsalHousePage)
  },
  {
    path: 'add-rehearsal-house',
    loadComponent: () => import('./rehearsal-house/add-rehearsal-house/add-rehearsal-house.page').then( m => m.AddRehearsalHousePage)
  },
];
