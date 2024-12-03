import React, { useEffect, useState } from 'react';
import CustomList from '../../components/customListComponent/CustomList';
import { fetchPaginatedItems } from '../../services/database';
import { useNavigate, useLocation } from 'react-router-dom';

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
  const itemsPerPage = 10;

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
    <div>
      <h1>Lista de Registros</h1>
      <button onClick={() => navigate('/form')} style={{ marginBottom: '20px' }}>
        Adicionar Novo Registro
      </button>
      {items.length > 0 ? (
        <>
          <CustomList
            items={items}
            onEdit={(id) => navigate(`/form/${id}`)}
          />
          {hasMore && !loading && (
            <button onClick={() => setPage((prev) => prev + 1)}>Carregar Mais</button>
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
