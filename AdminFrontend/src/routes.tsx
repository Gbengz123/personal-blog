import type { RouteObject } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Posts from './pages/dashboard/posts/Posts';
import CreatePost from './pages/dashboard/posts/CreatePost';
import EditPost from './pages/dashboard/posts/EditPost';
import Comments from './pages/dashboard/comments/Comments';
import Login from './pages/auth/Login';
import AuthLayout from './layouts/AuthLayout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { path: 'posts/:id', index: true, element: <Posts /> },
      { path: 'create-post', element: <CreatePost /> },
      { path: 'edit-post/:id', element: <EditPost /> },
      { path: 'comments', element: <Comments /> },
    ],
  },
  {
    path: '/login',
    element: <AuthLayout />,
    children: [{ path: '', index: true, element: <Login /> }],
  },
];

export default routes;
