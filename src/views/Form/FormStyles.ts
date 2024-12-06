import { styled } from '@mui/system';

export const Container = styled('div')({
  padding: '20px',
});

export const FormControl = styled('div')({
  padding: '10px',
});

export const Select = styled('select')({
  marginLeft: '10px',
  padding: '5px',
  borderRadius: '4px',
  border: '1px solid #ccc',
});

export const ButtonContainer = styled('div')({
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'space-between',
});

export const ButtonSave = styled("button")({
  padding: "10px 20px",
  backgroundColor: "#4caf50",
  color: "white",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer", // Adicione cursor para garantir melhor UX
});

export const ButtonCancel = styled("button")({
  padding: "10px 20px",
  backgroundColor: "#ccc",
  color: "black",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
});

export const ButtonDelete = styled("button")({
  padding: "10px 20px",
  backgroundColor: "#f44336",
  color: "white",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
});

