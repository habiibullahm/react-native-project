import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomTab = ({ data, section, onPress }) => {
  return (
    <View style={styles.tabContainer}>
      {data.map((item, index) => (
        <TouchableOpacity key={item.id} onPress={() => onPress(index)} style={styles.tabButton}>
          <Text style={[styles.tabText, section === index && styles.activeTabText]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  tabButton: {
    padding: 10,
  },
  tabText: {
    fontSize: 16,
    color: 'gray',
  },
  activeTabText: {
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default CustomTab;
