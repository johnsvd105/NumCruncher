import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    padding: 20,
  },
  appTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  display: {
    width: '100%',
    minHeight: '20%',
    backgroundColor: '#444',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    elevation: 5,
  },
  displayText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 40,
    elevation: 5,
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  historyContainer: {
    width: '100%',
    maxHeight: '30%',
    backgroundColor: '#222',
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    elevation: 5,
  },
  historyText: {
    fontSize: 18,
    color: '#ccc',
    marginBottom: 5,
  },
});
