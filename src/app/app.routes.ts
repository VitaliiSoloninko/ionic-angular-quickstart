import { Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./home/home-page/home-page.component').then(
            (m) => m.HomePageComponent,
          ),
      },
      {
        path: 'library',
        loadComponent: () =>
          import('./library/library-page/library-page.component').then(
            (m) => m.LibraryPageComponent,
          ),
      },
      {
        path: 'radio',
        loadComponent: () =>
          import('./radio/radio-page/radio-page.component').then(
            (m) => m.RadioPageComponent,
          ),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./search/search-page/search-page.component').then(
            (m) => m.SearchPageComponent,
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'new',
    loadComponent: () => import('./new/new.page').then((m) => m.NewPage),
  },
];
