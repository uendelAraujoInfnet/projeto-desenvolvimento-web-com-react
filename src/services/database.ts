import { createClient } from '@supabase/supabase-js';


// Supabase Config
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Variáveis de ambiente SUPABASE_URL ou SUPABASE_KEY não definidas.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

// Busca da paginação de itens
export const fetchPaginatedItems = async (
  table: string,
  page: number,
  itemsPerPage: number
) => {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage - 1;

  const { data, error } = await supabase
    .from(table)
    .select('*')
    .order('created_at', { ascending: false })
    .range(start, end);

  if (error) {
    console.error('Erro ao buscar registros:', error);
    throw error;
  }

  return data;
};


// Busca dos itens
export const fetchRecords = async () => {
  const { data, error } = await supabase
    .from('records')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Erro ao buscar registros:', error);
    throw error;
  }

  return data;
};


// Inserção de itens
export const insertItem = async (table: string, data: any) => {
  const { error } = await supabase.from(table).insert(data);
  if (error) throw error;
};


// Atualização de itens
export const updateItem = async (table: string, id: string, data: any) => {
  const { error } = await supabase.from(table).update(data).eq('id', id);
  if (error) throw error;
};


// Deleção de itens
export const deleteItem = async (table: string, id: string) => {
  const { error } = await supabase.from(table).delete().eq('id', id);
  if (error) throw error;
};


// Busca de itens por tipo
export const fetchItems = async (table: string) => {
  const { data, error } = await supabase.from(table).select('*').order('created_at', { ascending: false });
  if (error) throw error;
  return data;
};


// Busca do resumo dos itens
export const fetchSummary = async () => {
  const { data, error } = await supabase.rpc('get_summary');
  if (error) {
    console.error('Erro ao buscar resumo:', error);
    throw new Error(error.message);
  }
  return data[0];
};


// Busca de itens por ID
export const fetchItemById = async (table: string, id: string) => {
  const { data, error } = await supabase
    .from(table)
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Erro ao buscar item:', error);
    throw error;
  }

  return data;
};
