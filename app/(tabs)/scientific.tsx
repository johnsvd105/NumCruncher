import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const ScientificCalculator = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (input) => {
    if (input === '=') {
      try {
        setResult(eval(display).toString());
      } catch (e) {
        setResult('Error');
      }
    } else if (input === 'C') {
      setDisplay('');
      setResult('');
    } else {
      setDisplay(display + input);
    }
  };

  const buttons = [
    ['C', '(', ')', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '^', '='],
    ['sin', 'cos', 'tan', 'log'],
  ];

  const scientificFunctions = {
    sin: (val) => Math.sin(val),
    cos: (val) => Math.cos(val),
    tan: (val) => Math.tan(val),
    log: (val) => Math.log(val),
  };

  const handleScientificPress = (func) => {
    const value = parseFloat(display);
    if (!isNaN(value)) {
      setResult(scientificFunctions[func](value).toString());
    } else {
      setResult('Error');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>NumCruncher</Text>
      <View style={styles.displayContainer}>
        <Text style={styles.display}>{display}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((button) => (
              <TouchableOpacity
                key={button}
                style={styles.button}
                onPress={() =>
                  ['sin', 'cos', 'tan', 'log'].includes(button)
                    ? handleScientificPress(button)
                    : handlePress(button)
                }
              >
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    color: '#fff',
    marginBottom: 20,
  },
  displayContainer: {
    width: '90%',
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 20,
    alignItems: 'flex-end',
  },
  display: {
    fontSize: 40,
    color: '#fff',
  },
  result: {
    fontSize: 30,
    color: '#888',
    marginTop: 10,
  },
  buttonsContainer: {
    width: '90%',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007aff',
    padding: 20,
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default ScientificCalculator;
