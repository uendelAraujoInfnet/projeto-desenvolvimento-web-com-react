import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/Context';
import TextField from '../../components/textFieldComponent/TextFieldComponent';
import Button from '@mui/material/Button';

const SignIn: React.FC = () => {
  const { supabase, setIsAuthenticated } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        alert(`Erro ao entrar: ${error.message}`);
        return;
      }
      setIsAuthenticated(true);
      navigate('/');
    } catch (err) {
      console.error('Erro desconhecido:', err);
    }
  };

  return (
    <div>
      <h1>Entrar</h1>
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" onClick={handleSignIn}>Entrar</Button>
    </div>
  );
};

export default SignIn;
