// =============================================================================
// src/components/BottomNavigation.js - Bottom Navigation Component
// =============================================================================

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/color';

const BottomNavigation = ({ currentTab, onTabChange, onAddPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.navButton, currentTab === 'today' && styles.activeNavButton]}
        onPress={() => onTabChange('today')}
        activeOpacity={0.7}
      >
        <Text style={styles.navEmoji}>📅</Text>
        <Text style={[styles.navLabel, currentTab === 'today' && styles.activeNavLabel]}>
          Today
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.addFab}
        onPress={onAddPress}
        activeOpacity={0.8}
      >
        <Text style={styles.addFabText}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navButton, currentTab === 'stats' && styles.activeNavButton]}
        onPress={() => onTabChange('stats')}
        activeOpacity={0.7}
      >
        <Text style={styles.navEmoji}>📊</Text>
        <Text style={[styles.navLabel, currentTab === 'stats' && styles.activeNavLabel]}>
          Stats
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingBottom: 34,
    paddingTop: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navButton: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  activeNavButton: {
    backgroundColor: colors.primaryLight,
  },
  navEmoji: {
    fontSize: 24,
    marginBottom: 4,
  },
  navLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  activeNavLabel: {
    color: colors.primary,
    fontWeight: '600',
  },
  addFab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  addFabText: {
    fontSize: 32,
    color: colors.white,
    fontWeight: '300',
    marginTop: -2,
  },
});

export default BottomNavigation;