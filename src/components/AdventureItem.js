// =============================================================================
// src/components/AdventureItem.js - Adventure List Item Component
// =============================================================================

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { formatTime } from "../utils/dateHelpers";
import { colors } from "../styles/color";

const AdventureItem = ({ adventure, onDelete }) => {
    return (
        <TouchableOpacity
        style={styles.container}
        onLongPress={() => onDelete(adventure.id)}
        activeOpacity={0.7}
        >
            <View style={styles.icon}>
                <Text style={styles.iconEmoji}>{adventure.iconEmoji}</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title} numberOfLines={2}>
                    {adventure.title}
                </Text>
                <Text style={styles.time}>
                    {formatTime(new Date(adventure.timestamp))}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.iconBackground,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  iconEmoji: {
    fontSize: 24,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  time: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});

export default AdventureItem;