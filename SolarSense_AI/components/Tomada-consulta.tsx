import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';

interface Dados {
  id: string;
  valor: number;
  timestamp: string;
  // adicione outros campos conforme seu JSON
}

const MonitoramentoScreen: React.FC = () => {
  const [dados, setDados] = useState<Dados | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setError(null);
      const response = await fetch('https://sua-api.com/dados/ultimo');
      
      if (!response.ok) {
        throw new Error('Erro ao buscar dados');
      }
      
      const jsonData: Dados = await response.json();
      setDados(jsonData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
      console.error('Erro ao buscar dados:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Buscar dados imediatamente ao montar o componente
    fetchData();

    // Configurar polling a cada 5 minutos (300000 ms)
    const interval = setInterval(fetchData, 300000);

    // Limpar intervalo ao desmontar o componente
    return () => clearInterval(interval);
  }, []);

  if (loading && !dados) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando dados...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Erro: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monitoramento em Tempo Real</Text>
      
      {dados && (
        <View style={styles.dataContainer}>
          <Text style={styles.label}>Valor Atual:</Text>
          <Text style={styles.value}>{dados.valor}</Text>
          
          <Text style={styles.label}>Última Atualização:</Text>
          <Text style={styles.timestamp}>
            {new Date(dados.timestamp).toLocaleString('pt-BR')}
          </Text>
        </View>
      )}
      
      <Text style={styles.note}>
        Os dados são atualizados automaticamente a cada 5 minutos
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  dataContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  value: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 15,
  },
  timestamp: {
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
  },
  error: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
  note: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default MonitoramentoScreen;