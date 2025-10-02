import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { BarChart } from 'react-native-charts-wrapper';

const { width } = Dimensions.get('window');

interface Dados {
  eletronico: string;
  data: string;
  hora: string;
  kWh: string;
  valor: string;
  moeda: string;
}

interface GraficoConsumoProps {
  data: Dados[];
}

const GraficoConsumo: React.FC<GraficoConsumoProps> = ({ data }) => {
  // Processar os dados para o gráfico - agrupar por dia para melhor visualização
  const consumoPorDia: { [key: string]: number } = {};
  
  data.forEach(item => {
    const dataObj = new Date(item.data.replace(/\//g, '-'));
    const dia = `${dataObj.getDate()}/${dataObj.getMonth() + 1}`;
    
    if (!consumoPorDia[dia]) {
      consumoPorDia[dia] = 0;
    }
    
    // Converter kWh de string para número (tratando a vírgula como separador decimal)
    const consumo = parseFloat(item.kWh.replace(',', '.'));
    consumoPorDia[dia] += consumo;
  });

  // Converter o objeto em arrays para o gráfico
  const dias = Object.keys(consumoPorDia);
  const valores = Object.values(consumoPorDia).map(valor => ({ y: valor }));

  const chartData = {
    dataSets: [{
      values: valores,
      label: 'Consumo Diário (kWh)',
      config: {
        color: '#da3030',
        barShadowColor: 'rgba(218, 48, 48, 0.3)',
        drawValues: false,
      }
    }],
    config: {
      barWidth: 0.6,
    }
  };

  // Calcular consumo total e custo
  const consumoTotal = valores.reduce((total, item) => total + item.y, 0);
  const custoTotal = consumoTotal * 0.034; // Usando o valor fixo de R$ 0,034 por kWh

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Consumo da Geladeira</Text>
      
      <View style={styles.resumoContainer}>
        <View style={styles.resumoItem}>
          <Text style={styles.resumoLabel}>Consumo Total</Text>
          <Text style={styles.resumoValor}>{consumoTotal.toFixed(2)} kWh</Text>
        </View>
        <View style={styles.resumoItem}>
          <Text style={styles.resumoLabel}>Custo Total</Text>
          <Text style={styles.resumoValor}>R$ {custoTotal.toFixed(2)}</Text>
        </View>
      </View>

      <BarChart
        style={styles.chart}
        data={chartData}
        xAxis={{
          valueFormatter: dias,
          granularityEnabled: true,
          granularity: 1,
          position: 'BOTTOM',
          drawGridLines: false,
          textSize: 10,
          labelRotationAngle: -45,
          yOffset: -5,
        }}
        yAxis={{
          left: {
            drawGridLines: true,
            granularityEnabled: true,
            granularity: 0.5,
            textSize: 10,
            axisMinimum: 0,
          },
          right: {
            enabled: false
          }
        }}
        chartDescription={{ text: '' }}
        legend={{ enabled: false }}
        drawValueAboveBar={false}
        scaleEnabled={true}
        pinchZoom={true}
        doubleTapToZoomEnabled={true}
        highlights={[]}
        animation={{ durationX: 1000, durationY: 1000 }}
      />
      
      <Text style={styles.legenda}>Consumo diário em kWh</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 10,
    height: 400,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  resumoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  resumoItem: {
    alignItems: 'center',
  },
  resumoLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  resumoValor: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#da3030',
  },
  chart: {
    flex: 1,
    marginLeft: -10,
  },
  legenda: {
    fontSize: 10,
    textAlign: 'center',
    color: '#666',
    marginTop: 5,
  },
});

export default GraficoConsumo