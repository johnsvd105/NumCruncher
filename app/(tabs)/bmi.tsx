import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const BMI = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [bmiCategory, setBMICategory] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBMI(bmiValue);

      if (bmiValue < 18.5) {
        setBMICategory('Underweight');
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBMICategory('Normal');
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBMICategory('Overweight');
      } else {
        setBMICategory('Obese');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI</Text>
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={weight}
        onChangeText={text => setWeight(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        placeholderTextColor="#aaa"
        keyboardType="numeric"
        value={height}
        onChangeText={text => setHeight(text)}
      />
      <TouchableOpacity
        style={[styles.button, (weight && height) ? styles.buttonActive : styles.buttonDisabled]}
        onPress={calculateBMI}
        disabled={!weight || !height}
      >
        <Text style={styles.buttonText}>CALCULATE</Text>
      </TouchableOpacity>
      {bmi && (
        <View style={styles.resultContainer}>
          <Text style={styles.bmiText}>{bmi} BMI</Text>
          <Text style={styles.bmiCategory}>{bmiCategory}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1e1e1e',
  },
  title: {
    fontSize: 24,
    color: '#466DD8',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    color: '#fff',
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#333',
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonActive: {
    backgroundColor: '#007bff',
  },
  buttonDisabled: {
    backgroundColor: '#555555',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  bmiText: {
    fontSize: 24,
    color: 'white'
  },
  bmiCategory: {
    fontSize: 18,
    color: 'white',
  },
});

export default BMI;
