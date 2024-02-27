import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Chart= () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Expense Chart</Text>
      </View>
      <View style={styles.chartContainer}>
        {/* Add your custom chart component here */}
        <View style={styles.chart}>
          {/* Your chart content goes here */}
          <Text style={styles.chartText}>Your Chart Goes Here</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Your expense trend over the last six months</Text>
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
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    color: '#0373F3',
    textAlign: 'center',
  },
  chartContainer: {
    alignItems: 'center',
  },
  chart: {
    borderWidth: 1,
    borderColor: '#0373F3',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  chartText: {
    fontSize: 16,
    color: '#0373F3',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#0373F3',
    textAlign: 'center',
  },
});

export default Chart;
