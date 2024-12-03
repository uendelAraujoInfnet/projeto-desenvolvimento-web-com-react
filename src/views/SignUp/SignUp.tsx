import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/Context';
import TextField from '../../components/textFieldComponent/TextFieldComponent';
import Button from '@mui/material/Button';
import AlertComponent from '../../components/alertComponent/AlertComponent';

const SignUp: React.FC = () => {
  const { supabase } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState<string | null>(null); // Estado para mensagem de alerta
  const [alertSeverity, setAlertSeverity] = useState<'error' | 'success'>('error'); // Severidade do alerta
  const navigate = useNavigate();

  const handleSignUp = async () => {
    setAlertMessage(null); // Limpa mensagem de alerta antes de validar

    if (!email || !password) {
      setAlertMessage('Por favor, preencha todos os campos.');
      setAlertSeverity('error');
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setAlertMessage(error.message);
        setAlertSeverity('error');
      } else {
        setAlertMessage('Registro bem-sucedido! Redirecionando...');
        setAlertSeverity('success');
        setTimeout(() => navigate('/signin'), 1500); // Redireciona após 1,5 segundos
      }
    } catch (err) {
      console.error('Erro desconhecido:', err);
      setAlertMessage('Ocorreu um erro inesperado. Tente novamente.');
      setAlertSeverity('error');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Registrar</h1>
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
      <Button variant="contained" onClick={handleSignUp} style={{ marginTop: '10px' }}>
        Registrar
      </Button>
      {alertMessage && (
        <div style={{ marginTop: '20px' }}>
          <AlertComponent message={alertMessage} severity={alertSeverity} />
        </div>
      )}
    </div>
  );
};

export default SignUp;
