import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { insertItem, updateItem, deleteItem, fetchItemById } from '../../services/database';
import CustomAppBar from '../../components/appBarComponent/AppBar';
import Eat from '../../components/eatComponent/Eat';
import Diaper from '../../components/diaperComponent/Diaper';
import Sleep from '../../components/sleepComponent/Sleep';

const Form: React.FC = () => {
  const { id } = useParams(); // Captura o ID do item para edição
  const navigate = useNavigate();
  const [type, setType] = useState<string>('eat');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState<boolean>(!!id); // Exibe um "carregando" se estiver editando um item

  // Função para carregar os dados do item caso seja edição
  const loadItem = async () => {
    if (!id) return;
    try {
      const item = await fetchItemById('records', id);
      if (item) {
        setType(item.type);
        setDescription(item.description);
      }
    } catch (error) {
      alert('Erro ao carregar o item.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadItem();
  }, [id]);

  // Função para salvar ou atualizar um item
  const handleSave = async () => {
    try {
      if (id) {
        await updateItem('records', id, { type, description });
        alert('Item atualizado com sucesso!');
      } else {
        await insertItem('records', { type, description });
        alert('Item criado com sucesso!');
      }
      navigate('/'); // Redireciona para a página Home
    } catch (error) {
      alert('Erro ao salvar o item.');
    }
  };

  // Função para excluir um item
  const handleDelete = async () => {
    if (window.confirm('Tem certeza que deseja excluir este item?')) {
      try {
        await deleteItem('records', id!);
        alert('Item excluído com sucesso!');
        navigate('/');
      } catch (error) {
        alert('Erro ao excluir o item.');
      }
    }
  };

  if (loading) return <p>Carregando item...</p>;

  return (
    <div>
      <CustomAppBar
        title={id ? 'Editar Item' : 'Novo Item'}
        onBack={() => navigate('/')}
        onDelete={id ? handleDelete : undefined}
      />
      <div>
        <label htmlFor="type">Tipo:</label>
        <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="eat">Alimentação</option>
          <option value="diaper">Fralda</option>
          <option value="sleep">Sono</option>
        </select>
      </div>
      <div>
        {type === 'eat' && <Eat onChange={setDescription} value={description} />}
        {type === 'diaper' && <Diaper onChange={setDescription} value={description} />}
        {type === 'sleep' && <Sleep onChange={setDescription} value={description} />}
      </div>
      <button onClick={handleSave}>{id ? 'Salvar' : 'Criar'}</button>
    </div>
  );
};

export default Form;
