import React from "react";
import AvatarComponent from "../AvatarComponent";
import { Nomes } from "../../data/data";

const AvatarManager: React.FC = () => {

  //Lista de nomes para gerar um avatar
  const names = Nomes;

  return (
    <div>
      <h2>Avatar Teste</h2>
      <div style={{ display: "flex", gap: '1rem', flexWrap: "wrap"}}>
        {names.map((name, index) => (
          <AvatarComponent key={index} name={name}/>
        ))}
      </div>
    </div>
  );
};

export default AvatarManager;