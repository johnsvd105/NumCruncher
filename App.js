import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Button from './components/Button';
import Display from './components/Display';
import History from './components/History';
import { styles } from './styles/styles';

export default function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [history, setHistory] = useState([]);

  const handlePress = (value) => {
    if (['+', '-', '*', '/'].includes(value)) {
      setOperator(value);
      setFirstValue(displayValue);
      setDisplayValue('0');
    } else if (value === '=') {
      const result = eval(`${firstValue} ${operator} ${displayValue}`);
      const calculation = `${firstValue} ${operator} ${displayValue} = ${result}`;
      setHistory([calculation, ...history]);
      setDisplayValue(result.toString());
      setOperator(null);
      setFirstValue('');
      setSecondValue('');
    } else {
      setDisplayValue(displayValue === '0' ? value : displayValue + value);
    }
  };

  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
    setSecondValue('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>NumCruncher</Text>
      <Display value={displayValue} />
      <History history={history} />
      <View style={styles.buttonRow}>
        <Button label="7" onPress={() => handlePress('7')} />
        <Button label="8" onPress={() => handlePress('8')} />
        <Button label="9" onPress={() => handlePress('9')} />
        <Button label="/" onPress={() => handlePress('/')} />
      </View>
      <View style={styles.buttonRow}>
        <Button label="4" onPress={() => handlePress('4')} />
        <Button label="5" onPress={() => handlePress('5')} />
        <Button label="6" onPress={() => handlePress('6')} />
        <Button label="*" onPress={() => handlePress('*')} />
      </View>
      <View style={styles.buttonRow}>
        <Button label="1" onPress={() => handlePress('1')} />
        <Button label="2" onPress={() => handlePress('2')} />
        <Button label="3" onPress={() => handlePress('3')} />
        <Button label="-" onPress={() => handlePress('-')} />
      </View>
      <View style={styles.buttonRow}>
        <Button label="0" onPress={() => handlePress('0')} />
        <Button label="C" onPress={handleClear} />
        <Button label="=" onPress={() => handlePress('=')} />
        <Button label="+" onPress={() => handlePress('+')} />
      </View>
    </View>
  );
}
