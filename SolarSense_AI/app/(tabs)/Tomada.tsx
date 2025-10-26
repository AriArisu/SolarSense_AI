import { Image } from 'expo-image';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import MonitoramentoScreen from '@/components/Tomada-consulta';
import GraficoBarra from '@/components/Gráfico/grafico_Linhas';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';
import AddTomada from '@/components/menu_adicionar_tomada/Add_Tomada';

const tomadasDisponiveis = [
  { id: '1', nome: 'GELADEIRA', icone: require('../../assets/77fb8ec9-253b-4daa-822f-69e993643891.png') },
  { id: '2', nome: 'AR CONDICIONADO', icone: require('../../assets/77fb8ec9-253b-4daa-822f-69e993643891.png') },
  { id: '3', nome: 'TOMADA 03', icone: require('../../assets/77fb8ec9-253b-4daa-822f-69e993643891.png') },
  { id: '4', nome: 'MICROONDAS', icone: require('../../assets/77fb8ec9-253b-4daa-822f-69e993643891.png') },
  { id: '5', nome: 'TOMADA 05', icone: require('../../assets/77fb8ec9-253b-4daa-822f-69e993643891.png') },
];

export default function Tomada() {
  const colorScheme = useColorScheme();
  const [tomadaSelecionada, setTomadaSelecionada] = useState<string | null>(null);
  const [showAddSheet, setShowAddSheet] = useState(false);
  
  const backgroundColor = colorScheme === 'dark' ? '#1C1C1E' : '#F2F2F7';
  const cardBackground = colorScheme === 'dark' ? '#2C2C2E' : '#FFFFFF';
  const textColor = colorScheme === 'dark' ? '#FFFFFF' : '#000000';
  const borderColor = '#E60013';

  const handleAdicionarTomada = () => {
    setShowAddSheet(true);
  };

  const handleCloseSheet = () => {
    setShowAddSheet(false);
  };

  const handleEditarTomada = (id: string) => {
    console.log('Editar tomada:', id);
    // Implementar lógica de editar tomada
  };

  const handleSelecionarTomada = (id: string) => {
    setTomadaSelecionada(id);
    // Implementar lógica para mostrar detalhes da tomada
  };

  if (tomadaSelecionada) {
    return (
      <ScrollView style={[styles.container, { backgroundColor }]}>
        <TouchableOpacity 
          style={styles.voltarButton}
          onPress={() => setTomadaSelecionada(null)}
        >
          <IconSymbol name="chevron.right" size={24} color={textColor} />
          <Text style={[styles.voltarText, { color: textColor }]}>Voltar</Text>
        </TouchableOpacity>
        <MonitoramentoScreen />
        <GraficoBarra />
      </ScrollView>
    );
  }

  return (
    <>
      <ScrollView style={[styles.container, { backgroundColor }]}>
        {/* Header com ícone central e botão adicionar */}
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Image
              source={require('../../assets/77fb8ec9-253b-4daa-822f-69e993643891.png')}
              style={styles.headerIcon}
              contentFit="contain"
            />
          </View>

          <TouchableOpacity 
            style={styles.addButton}
            onPress={handleAdicionarTomada}
            activeOpacity={0.8}
          >
            <IconSymbol name="plus.circle" size={28} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Lista de Tomadas */}
        <View style={styles.tomadasList}>
          {tomadasDisponiveis.map((tomada) => (
            <TouchableOpacity
              key={tomada.id}
              style={[styles.tomadaCard, { 
                backgroundColor: cardBackground,
                borderColor: borderColor 
              }]}
              onPress={() => handleSelecionarTomada(tomada.id)}
              activeOpacity={0.7}
            >
              <View style={styles.tomadaContent}>
                <Text style={[styles.tomadaNome, { color: textColor }]}>
                  {tomada.nome}
                </Text>
                
                <TouchableOpacity 
                  style={styles.editButton}
                  onPress={() => handleEditarTomada(tomada.id)}
                >
                  <IconSymbol name="pencil" size={20} color={textColor} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Sheet para Adicionar Tomada */}
      <AddTomada 
        visible={showAddSheet} 
        onClose={handleCloseSheet}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 30,
    position: 'relative',
  },
  iconContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#E60013',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  headerIcon: {
    width: 80,
    height: 80,
    tintColor: '#FFFFFF',
  },
  addButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FE7457',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  tomadasList: {
    padding: 16,
    gap: 16,
  },
  tomadaCard: {
    borderRadius: 12,
    borderWidth: 2,
    paddingVertical: 20,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tomadaContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tomadaNome: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
    flex: 1,
  },
  editButton: {
    padding: 8,
  },
  voltarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 8,
  },
  voltarText: {
    fontSize: 16,
    fontWeight: '600',
  },
});