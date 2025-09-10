// =============================================================================
// src/components/IconSelector.js - Icon Selection Component
// =============================================================================

import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ADVENTURE_ICONS } from '../data/adventureIcons';
import { colors } from '../styles/color';

const IconSelector = ({ selectedIcon, onIconSelect }) => {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {ADVENTURE_ICONS.map(icon => (
        <TouchableOpacity
          key={icon.id}
          style={[
            styles.iconOption,
            selectedIcon.id === icon.id && styles.selectedIconOption
          ]}
          onPress={() => onIconSelect(icon)}
        >
          <Text style={styles.iconEmoji}>{icon.emoji}</Text>
          <Text style={styles.iconName}>{icon.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  content: {
    paddingRight: 20,
  },
  iconOption: {
    alignItems: 'center',
    padding: 12,
    marginRight: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'transparent',
    minWidth: 80,
  },
  selectedIconOption: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryLight,
  },
  iconEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  iconName: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default IconSelector;