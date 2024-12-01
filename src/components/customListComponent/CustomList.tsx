import React from 'react';

interface CustomListProps {
  items: Array<{ id: string; description: string }>;
  onEdit: (id: string) => void; // Callback para edição de um item
}

const CustomList: React.FC<CustomListProps> = ({ items, onEdit }) => {
  return (
    <div>
      <h3>Lista de Registros</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span>{item.description}</span>
            <button onClick={() => onEdit(item.id)}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomList;
