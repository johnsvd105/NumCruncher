import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles/styles';

const Button = ({ label, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={() => onPress(label)}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

export default Button;
