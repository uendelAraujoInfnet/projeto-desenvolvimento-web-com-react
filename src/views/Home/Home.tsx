import React, { useEffect, useState } from 'react';
import CustomList from '../../components/customListComponent/CustomList';
import { fetchPaginatedItems } from '../../services/database';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 10; // Número de itens por página

  // Carregar itens paginados do banco de dados
  const loadItems = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const data = await fetchPaginatedItems('records', page, itemsPerPage);

      if (data.length < itemsPerPage) {
        setHasMore(false); // Não há mais itens para carregar
      }

      setItems((prev) => [...prev, ...data]);
    } catch (error) {
      console.error('Erro ao carregar itens:', error);
    } finally {
      setLoading(false);
    }
  };

  // Recarregar itens ao mudar a página
  useEffect(() => {
    loadItems();
  }, [page]);

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
            onEdit={(id) => navigate(`/form/${id}`)} // Navegar para edição
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
