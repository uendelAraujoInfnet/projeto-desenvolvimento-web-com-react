import React, { useEffect, useState } from 'react';
import { fetchSummary } from '../../services/database';

const Dashboard: React.FC = () => {
  const [summary, setSummary] = useState<any>({});
  const [loading, setLoading] = useState(true);

  const loadSummary = async () => {
    try {
      const data = await fetchSummary();
      setSummary(data);
    } catch (error) {
      const err = error as Error; // Garantindo o tipo do erro
      console.error('Erro ao carregar resumo:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSummary();
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Total de Fraldas Trocadas: {summary.totalDiaper || 0}</p>
      <p>Tempo Médio de Sono: {summary.avgSleep || 0} horas</p>
      <p>Total de Alimentações Registradas: {summary.totalEat || 0}</p>
    </div>
  );
};

export default Dashboard;
