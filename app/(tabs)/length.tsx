import { View, Text,TextInput,Button, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'

const Length = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>Length Converter</Text>

    <View style={styles.converterRow}>
      <Text style={styles.label}>Centimeter</Text>
      <TextInput style={styles.input} keyboardType="numeric" />
      <Text style={styles.shortForm}>cm</Text>
    </View>

    <View style={styles.converterRow}>
      <Text style={styles.label}>Decimeter</Text>
      <TextInput style={styles.input} keyboardType="numeric" />
      <Text style={styles.shortForm}>dm</Text>
    </View>

    <View style={styles.converterRow}>
      <Text style={styles.label}>Feet</Text>
      <TextInput style={styles.input} keyboardType="numeric" />
      <Text style={styles.shortForm}>ft</Text>
    </View>

    <View style={styles.converterRow}>
      <Text style={styles.label}>Inch</Text>
      <TextInput style={styles.input} keyboardType="numeric" />
      <Text style={styles.shortForm}>in</Text>
    </View>

    <View style={styles.converterRow}>
      <Text style={styles.label}>Kilometer</Text>
      <TextInput style={styles.input} keyboardType="numeric" />
      <Text style={styles.shortForm}>km</Text>
    </View>

    <View style={styles.converterRow}>
      <Text style={styles.label}>Yard</Text>
      <TextInput style={styles.input} keyboardType="numeric" />
      <Text style={styles.shortForm}>yd</Text>
    </View>

    <View style={styles.converterRow}>
      <Text style={styles.label}>Meter</Text>
      <TextInput style={styles.input} keyboardType="numeric" />
      <Text style={styles.shortForm}>m</Text>
    </View>

    <View style={styles.converterRow}>
      <Text style={styles.label}>Mile</Text>
      <TextInput style={styles.input} keyboardType="numeric" />
      <Text style={styles.shortForm}>mi</Text>
    </View>

    <View style={styles.buttonContainer}>
      <View style={{flex: 2}}/>
      <View style={styles.buttonWrapper}>
          <Pressable style={styles.button}onPress={() => {}}>
            <Text style={styles.buttonText}>Clear</Text>
          </Pressable>
        </View>
      <View style={{flex: 1}}/>
    </View>
  </ScrollView>
  )
}

export default Length

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
    marginVertical:30
  },
  converterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
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
    paddingHorizontal: 10,
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
  buttonWrapper: {
    flex:2,
  },
  button: {
    marginHorizontal: -10,
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
    fontSize:18,
  }
});