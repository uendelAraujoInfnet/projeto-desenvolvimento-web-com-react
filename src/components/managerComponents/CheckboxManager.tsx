import React, {useState} from "react";
import CheckboxComponent from "../CheckboxComponent";
import { CheckboxDados } from "../../data/data";

const CheckboxManager: React.FC = () => {

  const [checkboxes, setCheckboxes] = useState(CheckboxDados);

  // Função que serve para atualizar o estado de cada checkboxes
  const handleCheckboxChange = (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckboxes((prevState) =>
      prevState.map((checkbox) =>
        checkbox.id === id ? { ...checkbox, checked: event.target.checked } : checkbox
      )
    );
  };

  return(
    <div>
      <h2>Gerenciador de Checkboxes</h2>
      {checkboxes.map((checkbox) => (
        <CheckboxComponent
          key={checkbox.id}
          label={checkbox.label}
          checked={checkbox.checked}
          onChange={handleCheckboxChange(checkbox.id)}
        />
      ))}
    </div>
  );
};

export default CheckboxManager;