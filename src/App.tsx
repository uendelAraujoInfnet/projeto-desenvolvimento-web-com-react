import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import SignIn from './views/SignIn/SignIn';
import SignUp from './views/SignUp/SignUp';
import Dashboard from './views/Dashboard/Dashboard';
import Settings from './views/Settings/Settings';
import Form from './views/Form/Form';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';

const App: React.FC = () => {
    // Simulando autenticação
    const isAuthenticated = true; 

    return (
        <Router>
            <Routes>
                {/* Rotas Públicas : Aqui estão as rotas que são acessiveis por qualquer usuario */}
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />

                {/* Rotas Privadas : Aqui estão as rotas que só podem ser acessadas após o usuário realizar autenticação */}
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
                    path="/form"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Form />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
