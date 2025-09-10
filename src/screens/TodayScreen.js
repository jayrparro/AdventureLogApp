// =============================================================================
// src/screens/TodayScreen.js - Today's Adventures Screen
// =============================================================================

import React from 'react';
import { View, Text, FlatList } from 'react-native';
import AdventureItem from '../components/AdventureItem';
import EmptyState from '../components/EmptyState';
import { getTodayAdventures } from '../utils/adventureHelpers';
import { formatDate } from '../utils/dateHelpers';
import { commonStyles } from '../styles/commonStyles';

const TodayScreen = ({ adventures, onDeleteAdventure }) => {
  const todayAdventures = getTodayAdventures(adventures);

  const renderAdventureItem = ({ item }) => (
    <AdventureItem adventure={item} onDelete={onDeleteAdventure} />
  );

  return (
    <View style={commonStyles.tabContent}>
      <View style={commonStyles.header}>
        <Text style={commonStyles.headerTitle}>Today's Adventures</Text>
        <Text style={commonStyles.headerSubtitle}>
          {formatDate(new Date())}
        </Text>
        <View style={commonStyles.countBadge}>
          <Text style={commonStyles.countText}>{todayAdventures.length}</Text>
        </View>
      </View>

      {todayAdventures.length === 0 ? (
        <EmptyState
          emoji="🗺️"
          title="No adventures yet today"
          subtitle="Tap the + button to log your first adventure!"
        />
      ) : (
        <FlatList
          data={todayAdventures}
          renderItem={renderAdventureItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
};

export default TodayScreen;