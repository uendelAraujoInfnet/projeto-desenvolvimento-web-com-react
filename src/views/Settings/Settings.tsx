import React from 'react';
import { useAppContext } from '../../context/Context';

const Settings: React.FC = () => {
  const { setLanguage, setIsAuthenticated } = useAppContext();

  const handleLogout = async () => {
    setIsAuthenticated(false);
    localStorage.clear();
    window.location.href = '/signin';
  };

  return (
    <div>
      <h1>Configurações</h1>
      <button onClick={() => setLanguage('en')}>English</button>
      <button onClick={() => setLanguage('pt')}>Português</button>
      <button onClick={() => setLanguage('es')}>Español</button>
      <button onClick={() => setLanguage('fr')}>Français</button>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default Settings;
