import AddUserPage from 'pages/AddUserPage';
import HomePage from 'pages/HomePage';
import UpdateUserPage from 'pages/UpdateUserPage';
import UserDetailPage from 'pages/UserDetailPage';
import UsersPage from 'pages/UsersPage';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='users' element={<UsersPage />} />
        <Route path='users/:userId' element={<UserDetailPage/>} />
        <Route path='users/update/:userId' element={<UpdateUserPage/>} />
        <Route path='users/add' element={<AddUserPage/>} />
      </Route>
    </Routes>
  );
};
