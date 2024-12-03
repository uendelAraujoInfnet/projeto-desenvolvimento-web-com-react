import React, { createContext, useContext, useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from '../translations/en.json';
import ptTranslations from '../translations/pt.json';
import esTranslations from '../translations/es.json';
import frTranslations from '../translations/fr.json';

// Inicializar o Supabase
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export default supabase;

// Configuração do i18next
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    pt: { translation: ptTranslations },
    es: { translation: esTranslations },
    fr: { translation: frTranslations },
  },
  lng: localStorage.getItem('language') || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

interface ContextProps {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  supabase: any;
  setLanguage: (lang: string) => void;
}

const AppContext = createContext<ContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    // Recuperar o estado de autenticação do localStorage
    const storedAuth = localStorage.getItem('isAuthenticated');
    return storedAuth === 'true';
  });

  const setLanguage = (lang: string) => {
    localStorage.setItem('language', lang);
    i18n.changeLanguage(lang);
    window.location.reload();
  };

  // Verificar a sessão do Supabase ao carregar a aplicação
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setIsAuthenticated(!!data.session);
    };
    checkSession();
  }, []);

  // Atualizar o estado de autenticação no localStorage
  useEffect(() => {
    localStorage.setItem('isAuthenticated', String(isAuthenticated));
  }, [isAuthenticated]);

  return (
    <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated, supabase, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
