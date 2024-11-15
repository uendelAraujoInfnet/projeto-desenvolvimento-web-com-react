import { useState } from "react";
import AlertComponent from "../AlertComponent";

import "./AlertManager.scss";

const AlertManager: React.FC = () => {
  
  const [showAlert, setShowAlert] =useState(false);
  const [alertSeverity, setAlertSeverity] = useState<"success" | "error" | "info" | "warning">("success");
  const [alertMessage, setAlertMessage] = useState("This is a success alert!");

  const handleShowAlert = (severity: "success" | "error" | "info" | "warning", message: string) => {
    setAlertSeverity(severity);
    setAlertMessage(message);
    setShowAlert(true);

    //Tem como função esconder o alerta de forma automatica após 3 segundos
    setTimeout(() => {
      setShowAlert(false);
    }, 3000)
  };

  return (
    <div>
      <button className="AlertManager_button successButton" onClick={() => handleShowAlert("success", "Operação realizada com sucesso!")}> 
        Mostar Alerta de Sucesso
      </button>

      <button className="AlertManager_button errorButton" onClick={() => handleShowAlert("error", "Ocorreu um erro durante a operação")}>
        Mostar Alerta de Erro
      </button>

      <button className="AlertManager_button infoButton" onClick={() => handleShowAlert("info", "Aqui está uma informação sobre a operação.")}>
        Mostar Alerta de Informação
      </button>

      <button className="AlertManager_button warningButton" onClick={() => handleShowAlert("warning", "Cuidado! Algo precisa de atenção durante esta operação!")}>
        Mostar Alerta de Aviso
      </button>

      {/* Exibirá o AlertComponent somente quando o showAlert for true */}
      {showAlert && <AlertComponent severity={alertSeverity} message={alertMessage}/> }
    </div>
  );

};

export default AlertManager;