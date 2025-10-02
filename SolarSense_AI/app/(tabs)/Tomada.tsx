import { Image } from 'expo-image';
import { Platform, StyleSheet, View, ScrollView, } from 'react-native';
import { Collapsible } from '@/components/ui/collapsible';
import { ThemedText } from '@/components/themed-text';
import React, { useState } from 'react';
import MonitoramentoScreen from '@/components/Tomada-consulta';
import GraficoBarra from '@/components/Gráfico/grafico_Linhas';


export default function Tomada() {
  return (
    <ScrollView>

    <MonitoramentoScreen/>
    
    <GraficoBarra/>
    
    </ScrollView>
  );
}