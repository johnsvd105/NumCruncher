import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Button from '../components/Button';
import Display from '../components/Display';
import History from '../components/History';
import { styles } from '../styles/styles';
export default function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [history, setHistory] = useState([]);
  const [inputString, setInputString] = useState('');

  const handlePress = (value) => {
    if (['+', '-', '*', '/'].includes(value)) {
      if (operator) {
        // If there's already an operator, replace it with the new one
        const newInputString = inputString.slice(0, -1) + value;
        setOperator(value);
        setInputString(newInputString);
      } else {
        setOperator(value);
        setFirstValue(displayValue);
        setInputString(inputString + value);
      }
      setDisplayValue(displayValue);
    } else if (value === '=') {
      if (firstValue && operator) {
        const result = eval(`${firstValue} ${operator} ${displayValue}`);
        const calculation = `${firstValue} ${operator} ${displayValue} = ${result}`;
        setHistory([calculation, ...history]);
        setDisplayValue(result.toString());
        setOperator(null);
        setFirstValue('');
        setSecondValue('');
        setInputString(result.toString());
      }
    } else {
      if (displayValue === '0' || operator && secondValue === '') {
        setDisplayValue(value);
      } else {
        setDisplayValue(displayValue + value);
      }
      if (operator) {
        setSecondValue(secondValue + value);
      } else {
        setFirstValue(firstValue + value);
      }
      setInputString(inputString + value);
    }
  };

  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
    setSecondValue('');
    setInputString('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>NumCruncher</Text>
      <Display value={inputString || displayValue} />
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

// import React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;