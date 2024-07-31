import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../styles/styles';

const History = ({ history }) => (
  <ScrollView style={styles.historyContainer}>
    {history.map((entry, index) => (
      <Text key={index} style={styles.historyText}>{entry}</Text>
    ))}
  </ScrollView>
);

export default History;
