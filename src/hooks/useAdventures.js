// =============================================================================
// src/hooks/useAdventures.js - Adventures Hook
// =============================================================================

import { useState, useEffect } from 'react';
import { Alert } from 'react-native';

export const useAdventures = () => {
  const [adventures, setAdventures] = useState([]);

  // Initialize with sample data
  useEffect(() => {
    const sampleAdventures = [
      {
        id: '1',
        title: 'Morning coffee at the new café downtown',
        iconId: 'coffee',
        iconEmoji: '☕',
        iconName: 'Coffee',
        timestamp: new Date().toISOString()
      },
      {
        id: '2', 
        title: 'Walked through the park and saw ducks',
        iconId: 'walk',
        iconEmoji: '🚶',
        iconName: 'Walk',
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
      }
    ];
    setAdventures(sampleAdventures);
  }, []);

  const addAdventure = (title, icon) => {
    const newAdventure = {
      id: Date.now().toString(),
      title: title.trim(),
      iconId: icon.id,
      iconEmoji: icon.emoji,
      iconName: icon.name,
      timestamp: new Date().toISOString()
    };

    setAdventures(prev => [newAdventure, ...prev]);
    Alert.alert('Success', 'Adventure logged successfully! 🎉');
  };

  const deleteAdventure = (id) => {
    Alert.alert(
      'Delete Adventure',
      'Are you sure you want to delete this adventure?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive', 
          onPress: () => {
            setAdventures(prev => prev.filter(adventure => adventure.id !== id));
          }
        }
      ]
    );
  };

  return { adventures, addAdventure, deleteAdventure };
};