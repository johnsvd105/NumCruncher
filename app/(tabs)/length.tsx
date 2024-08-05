import { View, Text,TextInput, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { formatValue } from '../_utils/general'


const Length= () => {

  const defaultValues = {
    centimeter: '',
    decimeter: '',
    feet: '',
    inch: '',
    kilometer: '',
    yard: '',
    meter: '',
    mile: '',
  }

  const conversions = {
    centimeter: 'decimeter/10 feet/30.48 inch/2.54 kilometer/100000 yard/91.44 meter/100 mile/160934.4',
    decimeter: 'centimeter*10 feet/3.048 inch*3.937 kilometer/0.0001 yard/9.144 meter/10 mile/16093.44',
    feet: '',
    inch: '',
    kilometer: '',
    yard: '',
    meter: '',
    mile: '',
  }

  const [values, setValues] = useState(defaultValues);
  const convertValues = (fieldName, value) => {
    let newValues = { ...values, [fieldName]: value };

    if (conversions[fieldName]) {
      const parts = conversions[fieldName].split(' ');

      parts.forEach(rule => {

        const match = rule.match(/(\w+)([/*])(\d+(\.\d+)?)/);

        if (match) {
          const unit = match[1].trim();
          const operator = match[2]
          const number = parseFloat(match[3]);

          if (unit && !isNaN(number)) {
            let result;
            if (operator === '/') {
              result = (value / number)
            } 
            else if (operator === '*') {
              result = (value * number)
            }
            newValues[unit] = formatValue(result);
          }
        }
      });
    }
    setValues(newValues);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Length Converter</Text>

      {Object.keys(values).map((key) => (
        <View style={styles.converterRow} key={key}>
          <Text style={styles.label}>{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            placeholder='0'
            placeholderTextColor={'#bbb'}
            value={values[key]}
            onChangeText={(text) => convertValues(key, text)}
            onBlur={() => convertValues(key, values[key])}
          />
          <Text style={styles.shortForm}>
            {key === 'centimeter' && 'cm'}
            {key === 'decimeter' && 'dm'}
            {key === 'feet' && 'ft'}
            {key === 'inch' && 'in'}
            {key === 'kilometer' && 'km'}
            {key === 'yard' && 'yd'}
            {key === 'meter' && 'm'}
            {key === 'mile' && 'mi'}
          </Text>
        </View>
      ))}

      <View style={styles.buttonContainer}>
        <View style={{flex: 2}} />
        <View style={{flex: 2}}>
          <Pressable style={styles.button} onPress={() => setValues(defaultValues)}>
            <Text style={styles.buttonText}>Clear</Text>
          </Pressable>
        </View>
        <View style={{flex: 1}} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#1e1e1e',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#466DD8',
    textAlign: 'center',
    marginVertical: 20,
  },
  converterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    flex: 2,
    fontSize: 18,
    color: '#fff',
  },
  input: {
    flex: 2,
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    color: '#fff',
    paddingHorizontal: 20,
    backgroundColor: '#333',
  },
  shortForm: {
    flex: 1,
    fontSize: 18,
    color: '#fff',
    textAlign: 'right',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    marginHorizontal: -20,
    borderRadius:5,
    borderWidth:1, 
    height: 40,
    borderColor: '#fff',
    backgroundColor: '#007AFF',
    justifyContent:'center',
    alignItems:'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Length;