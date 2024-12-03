import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/Context';
import TextField from '../../components/textFieldComponent/TextFieldComponent';
import Button from '@mui/material/Button';
import AlertComponent from '../../components/alertComponent/AlertComponent';

const SignIn: React.FC = () => {
  const { supabase, setIsAuthenticated } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState<string | null>(null); // Estado para mensagem de erro
  const [alertSeverity, setAlertSeverity] = useState<'error' | 'success'>('error'); // Severidade do alerta
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setAlertMessage(error.message);
        setAlertSeverity('error');
        return;
      }
      setAlertMessage('Login realizado com sucesso!');
      setAlertSeverity('success');
      setIsAuthenticated(true); // Atualiza o estado de autenticação
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      console.error('Erro desconhecido:', err);
      setAlertMessage('Ocorreu um erro inesperado. Tente novamente.');
      setAlertSeverity('error');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Entrar</h1>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu email"
      />
      <TextField
        label="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Digite sua senha"
      />
      <Button variant="contained" onClick={handleSignIn} style={{ marginTop: '10px' }}>
        Entrar
      </Button>
      <Button
        variant="outlined"
        onClick={() => navigate('/signup')} // Botão para página de cadastro
        style={{ marginTop: '10px' }}
      >
        Criar Conta
      </Button>
      {alertMessage && (
        <div style={{ marginTop: '20px' }}>
          <AlertComponent message={alertMessage} severity={alertSeverity} />
        </div>
      )}
    </div>
  );
};

export default SignIn;
