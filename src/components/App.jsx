import HomePage from 'pages/HomePage';
import UsersPage from 'pages/UsersPage';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='users' element={<UsersPage />} />
      </Route>
    </Routes>
  );
};
