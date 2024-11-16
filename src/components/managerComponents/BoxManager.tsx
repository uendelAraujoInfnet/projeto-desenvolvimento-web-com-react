import React from "react";
import BoxComponent from "../BoxComponent";
import { BoxDados } from "../../data/data";

const BoxManager: React.FC = () => {

  const boxes = BoxDados;

  return (
    <div>
      <h2>Texte de Boxes Components</h2>
      {boxes.map((box) => (
        <BoxComponent key={box.id}>
          {box.content}
        </BoxComponent>
      ))}
    </div>
  );

};

export default BoxManager;