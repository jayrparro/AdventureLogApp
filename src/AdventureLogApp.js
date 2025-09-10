// =============================================================================
// src/AdventureLogApp.js - Main App Container
// =============================================================================

import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import TodayScreen from './screens/TodayScreen';
import StatsScreen from './screens/StatsScreen';
import AddAdventureModal from './screens/AddAdventureModal';
import BottomNavigation from './components/BottomNavigation';
import { useAdventures } from './hooks/useAdventures';
import { commonStyles } from './styles/commonStyles';

const AdventureLogApp = () => {
  const [currentTab, setCurrentTab] = useState('today');
  const [showAddModal, setShowAddModal] = useState(false);
  const { adventures, addAdventure, deleteAdventure } = useAdventures();

  const handleAddAdventure = (title, icon) => {
    addAdventure(title, icon);
    setShowAddModal(false);
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      {currentTab === 'today' ? (
        <TodayScreen adventures={adventures} onDeleteAdventure={deleteAdventure} />
      ) : (
        <StatsScreen adventures={adventures} />
      )}

      <BottomNavigation
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        onAddPress={() => setShowAddModal(true)}
      />

      <AddAdventureModal
        visible={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAddAdventure={handleAddAdventure}
      />
    </SafeAreaView>
  );
};

export default AdventureLogApp;