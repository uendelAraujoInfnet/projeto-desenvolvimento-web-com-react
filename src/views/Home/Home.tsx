import React, { useEffect, useState } from 'react';
import { fetchPaginatedItems, deleteItem } from '../../services/database';
import { useNavigate, useLocation } from 'react-router-dom';
import CardComponent from '../../components/cardComponent/CardComponent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

interface Item {
  id: string;
  description: string;
}

const Home: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 50;

  // Carregar itens paginados do banco de dados
  const loadItems = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const data: Item[] = await fetchPaginatedItems('records', page, itemsPerPage);

      if (data.length < itemsPerPage) {
        setHasMore(false);
      }

      setItems((prev) => [...prev, ...data]);
    } catch (error) {
      console.error('Erro ao carregar itens:', error);
    } finally {
      setLoading(false);
    }
  };

  // Função para excluir um item
  const handleDelete = async (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este registro?')) {
      try {
        await deleteItem('records', id);
        setItems((prev) => prev.filter((item) => item.id !== id));
        alert('Registro excluído com sucesso!');
      } catch (error) {
        console.error('Erro ao excluir o registro:', error);
        alert('Erro ao excluir o registro.');
      }
    }
  };

  // Carregar itens ao mudar de página
  useEffect(() => {
    loadItems();
  }, [page]);

  // Adicionar um novo item da rota, se não existir na lista
  useEffect(() => {
    const newItem = location.state?.newItem as Item | undefined;
    if (newItem && !items.some((item) => item.id === newItem.id)) {
      setItems((prev) => [newItem, ...prev]); // Adicionar ao início
    }
  }, [location.state, items]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Lista de Registros</h1>
      <button
        onClick={() => navigate('/form')}
        style={{
          marginBottom: '20px',
          padding: '10px 20px',
          backgroundColor: '#4caf50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Adicionar Novo Registro
      </button>
      {items.length > 0 ? (
        <>
          <Grid container spacing={3}>
            {items.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <CardComponent
                  title={`Registro #${item.id.substring(0, 5)}`}
                  description={item.description}
                >
                  <div style={{ marginTop: '10px' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => navigate(`/form/${item.id}`)}
                      style={{ marginRight: '10px' }}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDelete(item.id)}
                    >
                      Excluir
                    </Button>
                  </div>
                </CardComponent>
              </Grid>
            ))}
          </Grid>
          {hasMore && !loading && (
            <button
              onClick={() => setPage((prev) => prev + 1)}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: '#2196f3',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
              }}
            >
              Carregar Mais
            </button>
          )}
          {loading && <p>Carregando...</p>}
          {!hasMore && <p>Todos os itens foram carregados.</p>}
        </>
      ) : (
        <p>{loading ? 'Carregando itens...' : 'Nenhum registro encontrado.'}</p>
      )}
    </div>
  );
};

export default Home;
