import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider, useAppContext } from './context/Context';
import Home from './views/Home/Home';
import SignIn from './views/SignIn/SignIn';
import SignUp from './views/SignUp/SignUp';
import Dashboard from './views/Dashboard/Dashboard';
import Settings from './views/Settings/Settings';
import Form from './views/Form/Form';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';

const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAppContext();

  return (
    <Routes>
      {/* Rotas Públicas */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Rotas Privadas */}
      <Route
        path="/"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Settings />
          </ProtectedRoute>
        }
      />
      <Route
        path="/form/:id?" // Ajuste para aceitar um `id` opcional
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Form />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AppProvider>
  );
};

export default App;
