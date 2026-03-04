import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MiComponente = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Este es mi componente de asistencia QR, Gerardo Gomez.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default MiComponente;