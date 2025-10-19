import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import PowerButton from "./Botões/botão_tomada";
import { Dados, getTomada } from "@/Back-end/Mostar_Toamda";

const MonitoramentoScreen: React.FC = () => {
  const [dados, setDados] = useState<Dados | null>(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const resultado = await getTomada();
        setDados(resultado);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setErro("Não foi possível carregar os dados.");
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Monitoramento em Tempo Real</Text>
      </View>

      <View style={styles.smallContentRow}>
        <View style={styles.smallDataContainer}>
          {loading ? (
            <ActivityIndicator size="large" color="#ff6600" />
          ) : erro ? (
            <Text style={styles.errorText}>{erro}</Text>
          ) : dados ? (
            <>
              <Text style={styles.label}>Eletrônico:</Text>
              <Text style={styles.value}>{dados.Eletronico}</Text>

              <Text style={styles.label}>Timestamp:</Text>
              <Text style={styles.value}>{dados.timestamp}</Text>

              <Text style={styles.label}>Consumo (Kwh):</Text>
              <Text style={styles.value}>{dados.Kwh}</Text>

              <Text style={styles.label}>Moeda (R$):</Text>
              <Text style={styles.value}>{dados.Moeda}</Text>
            </>
          ) : (
            <Text style={styles.errorText}>Nenhum dado encontrado.</Text>
          )}
        </View>

        <View style={styles.smallPowerButtonContainer}>
          <PowerButton />
          <Text style={styles.powerButtonLabel}>Ligar / Desligar</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  header: { marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold", color: "#333" },
  smallContentRow: { flexDirection: "column", gap: 15 },
  smallDataContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  smallPowerButtonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  powerButtonLabel: {
    fontSize: 12,
    color: "#666",
    marginTop: 8,
    textAlign: "center",
  },
  label: { fontSize: 16, color: "#666", marginBottom: 5, fontWeight: "500" },
  value: { fontSize: 18, fontWeight: "bold", color: "#da3030", marginBottom: 15 },
  errorText: { fontSize: 16, color: "red", textAlign: "center" },
});

export default MonitoramentoScreen;
