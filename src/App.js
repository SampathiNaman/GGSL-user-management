
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import UsersList from './pages/UsersList';
import EditUser from './pages/EditUser';
import NotFound from './pages/NotFound'

import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/users-list" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/not-found" element={<NotFound />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/users-list" element={<UsersList />} />
          <Route path="/edit-user" element={<EditUser />} />
        </Route>
        
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
