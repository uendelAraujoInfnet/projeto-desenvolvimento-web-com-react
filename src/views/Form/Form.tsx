import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  insertItem,
  updateItem,
  deleteItem,
  fetchItemById,
} from "../../services/database";
import CustomAppBar from "../../components/appBarComponent/AppBar";
import GridComponent from "../../components/gridComponent/GridComponent";
import CardComponent from "../../components/cardComponent/CardComponent";
import TextField from "../../components/textFieldComponent/TextFieldComponent";
import CustomButton from "../../components/buttonComponent/CustomButton";
import {
  Container,
  FormControl,
  Select,
  ButtonContainer,
} from "./FormStyles";

const Form: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [type, setType] = useState<string>("eat");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState<boolean>(!!id);

  // Carregar item para edição
  useEffect(() => {
    const loadItem = async () => {
      if (!id) return;
      try {
        const item = await fetchItemById("records", id);
        if (item) {
          setType(item.type);
          setDescription(item.description);
        }
      } catch {
        alert("Erro ao carregar os dados do item.");
      } finally {
        setLoading(false);
      }
    };
    loadItem();
  }, [id]);

  // Salvar ou atualizar o item
  const handleSave = async () => {
    if (!description) {
      alert("Por favor, preencha a descrição.");
      return;
    }

    try {
      if (id) {
        await updateItem("records", id, { type, description });
        alert("Item atualizado com sucesso!");
      } else {
        await insertItem("records", { type, description });
        alert("Item criado com sucesso!");
      }
      navigate("/");
    } catch {
      alert("Erro ao salvar o item.");
    }
  };

  // Excluir o item
  const handleDelete = async () => {
    if (window.confirm("Você realmente deseja excluir este item?")) {
      try {
        await deleteItem("records", id!);
        alert("Item excluído com sucesso!");
        navigate("/");
      } catch {
        alert("Erro ao excluir o item.");
      }
    }
  };

  if (loading) return <p>Carregando dados...</p>;

  return (
    <Container>
      <CustomAppBar
        title={id ? "Editar Item" : "Novo Item"}
        onBack={() => navigate("/")}
        onDelete={id ? handleDelete : undefined}
      />
      <GridComponent>
        <CardComponent
          title={id ? "Editar Registro" : "Novo Registro"}
          description=""
        >
          <FormControl>
            <label htmlFor="type">Tipo:</label>
            <Select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="eat">Alimentação</option>
              <option value="diaper">Fralda</option>
              <option value="sleep">Sono</option>
            </Select>
          </FormControl>
          <div style={{ marginTop: "10px" }}>
            <TextField
              label="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <ButtonContainer>
            <CustomButton
              label={id ? "Salvar" : "Criar"}
              onClick={handleSave}
              style={{
                backgroundColor: "#4caf50",
                color: "white",
                padding: "10px 20px",
                borderRadius: "5px",
              }}
            />
            <CustomButton
              label={id ? "Excluir" : "Cancelar"}
              onClick={id ? handleDelete : () => navigate("/")}
              style={{
                backgroundColor: id ? "#f44336" : "#ccc",
                color: "white",
                padding: "10px 20px",
                borderRadius: "5px",
              }}
            />
          </ButtonContainer>
        </CardComponent>
      </GridComponent>
    </Container>
  );
};

export default Form;
