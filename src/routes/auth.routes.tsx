import { Article, Dashboard, ManageAccounts, Person, TableRows } from '@mui/icons-material';
import Facebook from '../images/facebook.png';
import Twitter from '../images/twitter.png';
import Youtube from '../images/youtube.png';
import Linkedin from '../images/linkedin.png';
import Instagram from '../images/instagram.png';
import { lazy } from 'react';
import { RouteItem } from '../interface/common.interface';

import SparkLineChart from '~/components/layout/SparkLineChart';
import Categories from '~/pages/categories/categories';
import CreateCategoriesPage from '~/pages/categories/CreateCategoriesPage';
const HomePage = lazy(() => import('../pages/home'));
const SamplePage = lazy(() => import('../pages/sample'));
const AdminsListingPage = lazy(() => import('~/pages/user-management/admin/admins'));
const AdminTwoListingPage = lazy(() => import('~/pages/user-management/admin/adminTwo'));
const CreateAdminPage = lazy(() => import('~/pages/user-management/admin/create-admin'));
const CreateAdminPageTwo = lazy(() => import('~/pages/user-management/admin/create-adminTwo'));
const EditAdminPage = lazy(() => import('~/pages/user-management/admin/edit-admin'));
const EditAdminTwo = lazy(() => import('~/pages/user-management/admin/EditAdminTwo'));
const RoleSelect = lazy(() => import('~/components/role/Role'));
const Chat = lazy(() => import('~/pages/chats/Chat'));
export const drawerRoutes: Array<RouteItem> = [
  {
    id: 'dashboard',
    path: '/',
    icon: <Dashboard />,
    element: <HomePage />,
    title: 'Dashboard',
  },
  {
    id: 'user-mgmt',
    path: '#',
    icon: <ManageAccounts />,
    element: <></>,
    title: 'User Management',
    children: [
      {
        id: 'admin',
        path: '/admin',
        icon: <Person />,
        element: <AdminsListingPage />,
        title: 'Admins',
      },
    ],
  },

  {
    id: 'post-module',
    path: '#',
    icon: <Article />,
    element: <></>,
    title: 'Post',
    children: [
      {
        id: 'post-category',
        path: '/categories',
        icon: <TableRows />,
        // element: <SamplePage />,
        element: <Categories />,
        title: 'Post Category',
      },
      {
        id: 'post',
        path: '/post',
        icon: <Article />,
        element: <SamplePage />,
        title: 'Post',
      },
    ],
  },
  {
    id: 'admin',
    path: '/admin2',
    icon: <Person />,
    element: <AdminTwoListingPage />,
    title: 'Admin2',
  },
  {
    id: 'admin',
    path: '/sparkline',
    icon: <Person />,
    element: <SparkLineChart />,
    title: 'Sparkline',
  },
  {
    id: 'admin',
    path: '/role',
    icon: <Person />,
    element: <RoleSelect />,
    title: 'Role',
  },
  {
    id: 'admin',
    path: '/chat',
    icon: <Person />,
    element: <Chat />,
    title: 'Chat',
  },
];
export const drawerAppRoutes: Array<RouteItem> = [
  {
    id: 'app1',
    path: 'facebook.com',

    element: <></>,
    title: 'Facebook',
    link: 'facebook.com',
    image: Facebook,
  },
  {
    id: 'app2',
    path: '/',

    element: <></>,
    title: 'Instagram',
    link: 'instagram.com',
    image: Instagram,
  },
  {
    id: 'app3',
    path: '/',

    element: <></>,
    title: 'Twitter',
    link: 'twitter.com',
    image: Twitter,
  },
  {
    id: 'app4',
    path: '/',

    element: <></>,
    title: 'Youtube',
    link: 'youtube.com',
    image: Youtube,
  },
  {
    id: 'app5',
    path: '/',

    element: <></>,
    title: 'LinkedIn',
    image: Linkedin,
  },
];

export const appRoutes: Array<RouteItem> = [
  {
    id: 'create-admin',
    path: '/admin/create',
    element: <CreateAdminPage />,
    title: 'Create Admin',
  },
  {
    id: 'create-category',
    path: '/category/create',
    element: <CreateCategoriesPage />,
    title: 'Create Admin',
  },
  {
    id: 'create-admin',
    path: '/admin2/create',
    element: <CreateAdminPageTwo />,
    title: 'Create Admin 2',
  },
  {
    id: 'edit-admin',
    path: '/admin/:id/edit',
    element: <EditAdminPage />,
    title: 'Edit Admin',
  },
  {
    id: 'edit-admin',
    path: '/admin2/:id/edit',
    element: <EditAdminTwo />,
    title: 'Edit Admin',
  },
  {
    id: 'categories',
    path: '/categories',
    element: <Categories />,
    title: 'Categories',
  },
];

export default [...drawerRoutes, ...appRoutes];
