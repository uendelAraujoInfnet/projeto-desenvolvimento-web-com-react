import React from "react";
import CardComponent from "../CardComponent";
import { CardsDados } from "../../data/data";

const CardManager: React.FC = () => {

  const cards = CardsDados;

  return(
    <div>
      <h2>Gerenciador de Cards</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {cards.map((card) => (
          <CardComponent key={card.id} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default CardManager;