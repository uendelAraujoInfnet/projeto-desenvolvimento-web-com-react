import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/Context';
import TextField from '../../components/textFieldComponent/TextFieldComponent';
import Button from '@mui/material/Button';

const SignUp: React.FC = () => {
  const { supabase } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      alert(error.message);
    } else {
      alert('Registro bem-sucedido!');
      navigate('/signin');
    }
  };

  return (
    <div>
      <h1>Registrar</h1>
      <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" onClick={handleSignUp}>Registrar</Button>
    </div>
  );
};

export default SignUp;
