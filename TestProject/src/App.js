import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import Card from './components/Card/card';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Card
        text="Eddard Stark"
        title="Winter is coming"
      />
      <Card
        text="Talha"
        title="Winter is coming"
      />
      <Card
        text="Talha"
        title="Winter is coming"
      />
      <Card
        text="Talha"
        title="Winter is coming"
      />
      <Card
        text="Talha"
        title="Winter is coming"
      />
      <Card
        text="Talha"
        title="Winter is coming"
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});
export default App;
