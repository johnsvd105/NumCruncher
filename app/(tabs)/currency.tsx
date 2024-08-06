import { View, Text, StyleSheet,TouchableOpacity,TextInput, FlatList} from 'react-native'
import React from 'react'
import { useState } from 'react'
import { acceptedCurrencyCodes } from '../_utils/constants';
import { getCurrencyRate } from '../_utils/api';
import { formatValue } from '../_utils/general';


const Currency = () => {

  const currencyCodes = acceptedCurrencyCodes;
  
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState('');
  const [isConverted, setIsConverted] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [dropdownType, setDropdownType] = useState(''); 


  const handleConvert = async() => {
    if (fromCurrency && toCurrency && amount) {
      const conversionRate = await getCurrencyRate(fromCurrency, toCurrency);
      if (conversionRate != null) {
        const convertedValue = parseFloat(amount) * conversionRate;
        setResult(formatValue(convertedValue));
        setIsConverted(true);
      } else {
        console.error('Conversion failed');
      }
    }
  };

  const filterCurrencies = (searchText, excludeCurrency) => {
    const searchRegex = new RegExp(searchText, 'i');
    return currencyCodes.filter((code) => {
      return code !== excludeCurrency && searchRegex.test(code);
    });
  };

  const handleChangeText = (text) => {
    const nonNumericText = text.replace(/[0-9]/g, '');

    if (nonNumericText.length <= 3) {
      setSearchText(nonNumericText);
    }
  }

  const renderDropdownItem = (item, setCurrency, setShowDropdown) => (
    <TouchableOpacity
      style={styles.dropdownItem}
      onPress={() => {
        setCurrency(item);
        setSearchText('');
        setShowDropdown(false);
      }}
    >
      <Text style={styles.dropdownItemText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>

      <TouchableOpacity onPress={() => {
        setDropdownType('from');
        setShowFromDropdown(!showFromDropdown);
        setSearchText('');
      }}>
        <TextInput
          style={styles.input}
          placeholder='Select currency to convert from'
          placeholderTextColor='#bbb'
          value={fromCurrency}
          editable={false}
        />
      </TouchableOpacity>
      {showFromDropdown && dropdownType === 'from' && (
        <View style={styles.dropdown}>
          <TextInput
            style={[styles.input, styles.searchInput]}
            placeholder='Search'
            placeholderTextColor='#bbb'
            value={searchText}
            onChangeText={handleChangeText}
          />
          <FlatList
            data={filterCurrencies(searchText, toCurrency)}
            keyExtractor={(item) => item}
            renderItem={({ item }) =>
              renderDropdownItem(item, setFromCurrency, setShowFromDropdown)
            }
            style={styles.dropdownList}
          />
        </View>
      )}

      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder='Enter amount'
        placeholderTextColor='#bbb'
        value={amount}
        onChangeText={setAmount}
      />

      <TouchableOpacity onPress={() => {
        setDropdownType('to');
        setShowToDropdown(!showToDropdown);
        setSearchText('');
      }}>
        <TextInput
          style={styles.input}
          placeholder='Select target currency'
          placeholderTextColor='#bbb'
          value={toCurrency}
          editable={false}
        />
      </TouchableOpacity>
      {showToDropdown && dropdownType === 'to' && (
        <View style={styles.dropdown}>
          <TextInput
            style={[styles.input, styles.searchInput]}
            placeholder='Search'
            placeholderTextColor='#bbb'
            value={searchText}
            onChangeText={handleChangeText}
          />
          <FlatList
            data={filterCurrencies(searchText, fromCurrency)}
            keyExtractor={(item) => item}
            renderItem={({ item }) =>
              renderDropdownItem(item, setToCurrency, setShowToDropdown)
            }
            style={styles.dropdownList}
          />
        </View>
      )}

      <TextInput
        style={styles.input}
        placeholder='Converted value'
        placeholderTextColor='#bbb'
        value={isConverted ? result : ''}
        editable={false}
      />
      <TouchableOpacity
        style={[
          styles.button,
          fromCurrency && toCurrency ? styles.buttonActive : styles.buttonDisabled,
        ]}
        onPress={handleConvert}
        disabled={!fromCurrency || !toCurrency}
      >
        <Text style={styles.buttonText}>Convert</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Currency

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
  searchInput: {
    marginBottom: 10,
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
  dropdown: {
    maxHeight: 200,
    backgroundColor: '#444444',
    borderRadius: 5,
    marginBottom: 20,
  },
  dropdownList: {
    maxHeight: 150, 
  },
  dropdownItem: {
    padding: 10,
    borderBottomColor: '#333333',
    borderBottomWidth: 1,
  },
  dropdownItemText: {
    color: '#ffffff',
  },
});