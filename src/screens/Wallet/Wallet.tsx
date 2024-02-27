import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Wallet = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Wallet</Text>
        <Text style={[styles.headerText, styles.primaryText]}>Total Balance: $500</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Manage your funds and transactions here.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add Money</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.transactionButton}>
          <Text style={styles.buttonText}>View Transactions</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    marginTop: 50,
    marginBottom: 30,
  },
  headerText: {
    fontSize: 24,
    color: '#0373F3',
    textAlign: 'center',
  },
  primaryText: {
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 18,
    color: '#0373F3',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0373F3',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  transactionButton: {
    backgroundColor: '#0373F3',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Wallet;
