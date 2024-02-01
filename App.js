import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Title from './src/components/Title';
import Form from './src/components/Form';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle='default'
      />
      <View style={styles.boxContainer}>
        <View style={styles.containerTop}> 
          <Title/>
        </View>
        <View style={styles.containerBottom}> 
          <Form/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#20232A'
  },
  boxContainer: {
    flex: 1, 
    backgroundColor: '#fff'
  },
  containerTop: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBottom: {
    flex: 3,
    backgroundColor: '#20232A',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
