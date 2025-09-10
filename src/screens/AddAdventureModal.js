// =============================================================================
// src/screens/AddAdventureModal.js - Add Adventure Modal Screen
// =============================================================================

import React, { useState } from 'react';
import { 
  Modal, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions,
  Alert 
} from 'react-native';
import IconSelector from '../components/IconSelector';
import { ADVENTURE_ICONS } from '../data/adventureIcons';
import { colors } from '../styles/color';

const { height } = Dimensions.get('window');

const AddAdventureModal = ({ visible, onClose, onAddAdventure }) => {
  const [title, setTitle] = useState('');
  const [selectedIcon, setSelectedIcon] = useState(ADVENTURE_ICONS[0]);

  const handleAdd = () => {
    if (!title.trim()) {
      Alert.alert('Error', 'Please enter an adventure title');
      return;
    }

    onAddAdventure(title, selectedIcon);
    setTitle('');
    setSelectedIcon(ADVENTURE_ICONS[0]);
  };

  const handleClose = () => {
    setTitle('');
    setSelectedIcon(ADVENTURE_ICONS[0]);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>New Adventure</Text>
            <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.input}
            placeholder="What adventure did you have?"
            placeholderTextColor={colors.textLight}
            value={title}
            onChangeText={setTitle}
            multiline
            maxLength={100}
            textAlignVertical="top"
          />

          <Text style={styles.sectionLabel}>Choose an icon:</Text>
          <IconSelector 
            selectedIcon={selectedIcon} 
            onIconSelect={setSelectedIcon} 
          />

          <TouchableOpacity 
            style={styles.addButton} 
            onPress={handleAdd}
            activeOpacity={0.8}
          >
            <Text style={styles.addButtonText}>Log Adventure</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: colors.modalOverlay,
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    maxHeight: height * 0.8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  closeButton: {
    padding: 4,
  },
  closeText: {
    fontSize: 24,
    color: colors.textSecondary,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    minHeight: 80,
    marginBottom: 24,
    color: colors.text,
  },
  sectionLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  addButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default AddAdventureModal;