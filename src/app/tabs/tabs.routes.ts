import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
	{
		path: 'tabs',
		component: TabsPage,
		children: [
			{
				path: 'teachers',
				loadComponent: () => import('../teachers/teachers.page').then(m => m.TeachersPage)
			},{
				path: 'teachers/:id',
				loadComponent: () => import('../teachers/detail-teacher/detail-teacher.page').then(m => m.DetailTeacherPage)
			},{
				path: 'add-teacher',
				loadComponent: () => import('../teachers/add-teacher/add-teacher.page').then(m => m.AddTeacherPage)
			},
			{
				path: 'rehearsal-house',
				loadComponent: () => import('../rehearsal-house/rehearsal-house.page').then(m => m.RehearsalHousePage)
			},{
				path: 'rehearsal-house/:id',
				loadComponent: () => import('../rehearsal-house/detail-rehearsal-house/detail-rehearsal-house.page').then(m => m.DetailRehearsalHousePage)
			},{
				path: 'add-rehearsal-house',
				loadComponent: () => import('../rehearsal-house/add-rehearsal-house/add-rehearsal-house.page').then(m => m.AddRehearsalHousePage)
			},
			{
				path: 'contracts',
				loadComponent: () => import('../contracts/contracts.page').then(m => m.ContractsPage)
			},{
				path: 'contracts/:id',
				loadComponent: () => import('../contracts/contracts.page').then(m => m.ContractsPage)
			},{
				path: 'add-contract',
				loadComponent: () => import('../contracts/contracts.page').then(m => m.ContractsPage)
			},
			{
				path: 'admin',
				loadComponent: () => import('../admin/admin.page').then(m => m.AdminPage)
			},
			{
				path: '',
				redirectTo: '/tabs/teachers',
				pathMatch: 'full',
			},
		],
	},
	{
		path: '',
		redirectTo: '/tabs/teachers',
		pathMatch: 'full',
	},
];
