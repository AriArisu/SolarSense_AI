import { Image } from 'expo-image';
import { Platform, StyleSheet, View, ScrollView, } from 'react-native';
import { Collapsible } from '@/components/ui/collapsible';
import { ThemedText } from '@/components/themed-text';
import React, { useState } from 'react';

export default function Tomada() {
  return (
    <ScrollView>

            <Image/>

      <ThemedText>
        Olá   
      </ThemedText>


     <ThemedText>
        Olá   
      </ThemedText>

    </ScrollView>
  );
}