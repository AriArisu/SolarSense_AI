import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const data = [
  { mes: "MAI", valor: 190 },
  { mes: "JUN", valor: 305 },
  { mes: "JUL", valor: 102 },
  { mes: "AGO", valor: 89 },
  { mes: "SET", valor: 120 },
  { mes: "OUT", valor: 92 },
  { mes: "NOV", valor: 0 },
];

const GraficoBarra: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chart}>
        {data.map((item, index) => (
          <View key={index} style={styles.barContainer}>
            {/* Valor acima */}
            {item.valor > 0 && (
              <Text style={styles.valueText}>{item.valor}</Text>
            )}

            {/* Barra */}
            <LinearGradient
              colors={["#FE7457", "#E60013"]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              style={[styles.bar, { height: item.valor }]}
            />

            {/* Mês abaixo */}
            <Text
              style={[
                styles.monthText,
                item.mes === "OUT" && { color: "#E60013", fontWeight: "600" },
              ]}
            >
              {item.mes}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150, 
  },
  chart: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
    width: "90%",
    height: 500,
    paddingBottom: 20,
  },
  barContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
  },
  bar: {
    width: 30,
    borderRadius: 6,
    marginBottom: 8,
  },
  valueText: {
    fontSize: 12,
    color: "#999",
    marginBottom: 4,
  },
  monthText: {
    fontSize: 12,
    color: "#999",
    marginTop: 6,
  },
});

export default GraficoBarra;
