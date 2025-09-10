// =============================================================================
// src/components/StatCard.js - Statistics Card Component
// =============================================================================

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/color';

const StatCard = ({ number, emoji, label, sublabel }) => {
  return (
    <View style={styles.container}>
      {number && <Text style={styles.number}>{number}</Text>}
      {emoji && <Text style={styles.emoji}>{emoji}</Text>}
      <Text style={styles.label}>{label}</Text>
      {sublabel && <Text style={styles.sublabel}>{sublabel}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 24,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  number: {
    fontSize: 48,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
  },
  emoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 4,
  },
  sublabel: {
    fontSize: 12,
    color: colors.textLight,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default StatCard;