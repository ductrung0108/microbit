import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Section = ({ title }) => {
  return <View
    style={styles.section}>
      <Text style={{color: "white"}}>{title}</Text>
    </View>
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Section title="Bridge"></Section>
      <Section title="Light A"></Section>
      <Section title="Light B "></Section>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1B',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#F1F1F1'
  },

  section: {
    height: '30%',
    width: '90%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: 'white',
    borderWidth: 0.3,
    alignItems: 'center',
    justifyContent: 'top',
    marginTop: 4,
    marginBottom: 4,
    color: 'white',
    padding: 20
  }
});
