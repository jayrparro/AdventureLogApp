// =============================================================================
// src/utils/adventureHelpers.js - Adventure Utility Functions
// =============================================================================

import { isToday, isThisWeek } from './dateHelpers';
import { ADVENTURE_ICONS } from '../data/adventureIcons';

export const getTodayAdventures = (adventures) => {
  return adventures.filter(adventure => isToday(adventure.timestamp));
};

export const getWeekAdventures = (adventures) => {
  return adventures.filter(adventure => isThisWeek(adventure.timestamp));
};

export const getMostFrequentIcon = (adventures) => {
  const weekAdventures = getWeekAdventures(adventures);
  if (weekAdventures.length === 0) return null;

  const iconCounts = {};
  weekAdventures.forEach(adventure => {
    iconCounts[adventure.iconId] = (iconCounts[adventure.iconId] || 0) + 1;
  });

  const mostFrequent = Object.entries(iconCounts).reduce((a, b) => 
    iconCounts[a[0]] > iconCounts[b[0]] ? a : b
  );

  const icon = ADVENTURE_ICONS.find(i => i.id === mostFrequent[0]);
  return { icon, count: mostFrequent[1] };
};