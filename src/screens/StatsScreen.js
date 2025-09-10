// =============================================================================
// src/screens/StatsScreen.js - Statistics Screen
// =============================================================================

import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import StatCard from '../components/StatCard';
import EmptyState from '../components/EmptyState';
import { getWeekAdventures, getMostFrequentIcon } from '../utils/adventureHelpers';
import { commonStyles } from '../styles/commonStyles';

const StatsScreen = ({ adventures }) => {
  const weekAdventures = getWeekAdventures(adventures);
  const mostFrequent = getMostFrequentIcon(adventures);

  return (
    <View style={commonStyles.tabContent}>
      <View style={commonStyles.header}>
        <Text style={commonStyles.headerTitle}>Weekly Stats</Text>
        <Text style={commonStyles.headerSubtitle}>Your adventure insights</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <StatCard 
          number={weekAdventures.length}
          label="Adventures This Week"
        />

        {mostFrequent && (
          <StatCard
            emoji={mostFrequent.icon.emoji}
            label={`${mostFrequent.icon.name} adventures logged ${mostFrequent.count} times`}
            sublabel="Most popular this week!"
          />
        )}

        {weekAdventures.length === 0 && (
          <EmptyState
            emoji="📊"
            title="No data yet"
            subtitle="Start logging adventures to see your stats!"
          />
        )}
      </ScrollView>
    </View>
  );
};

export default StatsScreen;