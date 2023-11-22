import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



const Section = ({ title }) => {
  const SectionContent = () => {
    return (
      <View style={{alignContent: "flex-start", width: "100%"}}>
        <Text style={{color: "white"}}>This is content</Text>
      </View>
    )
  }

  return <View
    style={styles.section}>
      <View style={{alignContent: "flex-start", width: "100%"}}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <SectionContent></SectionContent>
    </View>
}

export default function App() {
  return (
    <View style={styles.container}>
      <Section title="Status"></Section>
      <Section title="Bridge"></Section>
      <Section title="Lights"></Section>
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
    color: '#F1F1F1',
    paddingTop: "5%"
  },

  section: {
    height: '30%',
    width: '88%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'top',
    marginTop: 4,
    marginBottom: 4,
    color: 'white',
    padding: 20,
  },

  title: {
    fontSize: 20,
    color: 'white'
  }
});
