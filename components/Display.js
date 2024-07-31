import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/styles';

const Display = ({ value }) => (
  <View style={styles.display}>
    <Text style={styles.displayText}>{value}</Text>
  </View>
);

export default Display;
