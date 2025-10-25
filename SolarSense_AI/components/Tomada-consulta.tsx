import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, RefreshControl, ScrollView, Alert } from "react-native";
import PowerButton from "./Botões/botão_tomada";
import { Dados, getTomada } from "@/Back-end/Tomada_AWS/Mostar_Toamda";

const MonitoramentoScreen: React.FC = () => {
  const [dados, setDados] = useState<Dados | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const loadData = async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }
      
      setErro(null);
      
      console.log("Carregando dados da tomada...");
      const resultado = await getTomada();
      
      console.log("Dados recebidos:", resultado);
      
      // Verificar se os dados são válidos
      if (resultado && resultado.Eletronico) {
        setDados(resultado);
        console.log("Dados salvos no estado com sucesso");
      } else {
        throw new Error("Dados inválidos recebidos da API");
      }
      
    } catch (error: any) {
      console.error("Erro ao buscar dados:", error);
      const mensagemErro = error.message || "Não foi possível carregar os dados.";
      setErro(mensagemErro);
      
      Alert.alert(
        "Erro ao carregar dados",
        mensagemErro,
        [{ text: "OK" }]
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadData();
    
    // Atualizar a cada 30 segundos
    const interval = setInterval(() => {
      loadData(true);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const onRefresh = () => {
    loadData(true);
  };

  const renderConteudo = () => {
    if (loading && !refreshing) {
      return (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#FF6B5A" />
          <Text style={styles.loadingText}>Carregando dados...</Text>
        </View>
      );
    }

    if (erro && !dados) {
      return (
        <View style={styles.centerContainer}>
          <Text style={styles.errorText}>❌ {erro}</Text>
          <Text style={styles.retryText}>Puxe para baixo para tentar novamente</Text>
        </View>
      );
    }

    if (dados) {
      return (
        <>
          <View style={styles.dataCard}>
            <View style={styles.dataRow}>
              <Text style={styles.label}>Eletrônico:</Text>
              <Text style={styles.value}>{dados.Eletronico}</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.dataRow}>
              <Text style={styles.label}>Última atualização:</Text>
              <Text style={styles.value}>
                {new Date(dados.timestamp).toLocaleString('pt-BR')}
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.dataRow}>
              <Text style={styles.label}>Consumo (kWh):</Text>
              <Text style={[styles.value, styles.highlight]}>
                {dados.Kwh.toFixed(4)}
              </Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.dataRow}>
              <Text style={styles.label}>Valor:</Text>
              <Text style={[styles.value, styles.highlight]}>
                {dados.Moeda} {dados.Valor.toFixed(3)}
              </Text>
            </View>
          </View>

          <View style={styles.powerButtonContainer}>
            <PowerButton />
            <Text style={styles.powerButtonLabel}>Ligar / Desligar</Text>
          </View>
        </>
      );
    }

    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>Nenhum dado disponível</Text>
      </View>
    );
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={["#FF6B5A"]}
          tintColor="#FF6B5A"
        />
      }
    >
      <View style={styles.header}>
        <Text style={styles.title}>⚡ Monitoramento em Tempo Real</Text>
        <Text style={styles.subtitle}>
          {dados ? "Dados atualizados" : "Carregando..."}
        </Text>
      </View>

      {renderConteudo()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  centerContainer: {
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "white",
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
  dataCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dataRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
  },
  label: {
    fontSize: 16,
    color: "#666",
    fontWeight: "500",
    flex: 1,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
    textAlign: "right",
  },
  highlight: {
    color: "#FF6B5A",
    fontSize: 18,
  },
  powerButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  powerButtonLabel: {
    fontSize: 14,
    color: "#666",
    marginTop: 15,
    textAlign: "center",
    fontWeight: "600",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#666",
  },
  errorText: {
    fontSize: 16,
    color: "#E60013",
    textAlign: "center",
    fontWeight: "600",
  },
  retryText: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
    marginTop: 10,
  },
});

export default MonitoramentoScreen;