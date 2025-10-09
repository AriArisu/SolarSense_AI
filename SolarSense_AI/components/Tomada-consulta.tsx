import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, useWindowDimensions } from 'react-native';
import PowerButton from './Botões/botão_tomada';

import consumoData from '../Back-end/df_ideal.json';

interface Dados {
  eletronico: string;
  data: string;
  hora: string;
  kWh: string;
  valor: string;
  moeda: string;
}

const MonitoramentoScreen: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [dados, setDados] = useState<Dados | null>(null);
  const [loading, setLoading] = useState(true);
  const { width } = useWindowDimensions();

  const isSmallScreen = width < 768;

  useEffect(() => {
    if (consumoData && consumoData.length > 0) {
      setDados(consumoData[0]);
      setLoading(false);
    } else {
      setLoading(false);
    }

    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % consumoData.length;
        setDados(consumoData[nextIndex]);
        return nextIndex;
      });
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  if (!consumoData || consumoData.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Nenhum dado disponível</Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#d32828ff" />
        <Text>Carregando dados...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Monitoramento em Tempo Real</Text>
      </View>
      
      <View style={[
        styles.contentRow,
        isSmallScreen && styles.smallContentRow
      ]}>
        <View style={[
          styles.dataContainer,
          isSmallScreen && styles.smallDataContainer
        ]}>
          {dados ? (
            <>
              <Text style={styles.label}>Eletrônico:</Text>
              <Text style={styles.value}>{dados.eletronico}</Text>

              <Text style={styles.label}>Data:</Text>
              <Text style={styles.value}>{dados.data}</Text>

              <Text style={styles.label}>Hora:</Text>
              <Text style={styles.value}>{dados.hora}</Text>

              <Text style={styles.label}>Consumo (kWh):</Text>
              <Text style={styles.value}>{dados.kWh}</Text>

              <Text style={styles.label}>Custo (R$):</Text>
              <Text style={styles.value}>{dados.valor}</Text>
            </>
          ) : (
            <Text style={styles.errorText}>Erro ao carregar dados</Text>
          )}
        </View>
        
        <View style={[
          styles.powerButtonContainer,
          isSmallScreen && styles.smallPowerButtonContainer
        ]}>
          <PowerButton/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  contentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 20,
  },
  smallContentRow: {
    flexDirection: 'column',
    gap: 15,
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
    flex: 1,
  },
  smallDataContainer: {
    width: '100%',
  },
  powerButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    // Background removido
    borderRadius: 10,
    // Sombras removidas
    minWidth: 120,
  },
  smallPowerButtonContainer: {
    width: '100%',
    minWidth: 'auto',
  },
  powerButtonLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
    fontWeight: '500',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#da3030',
    marginBottom: 15,
  },
  errorText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default MonitoramentoScreen;