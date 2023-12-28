import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Temp from "./screens/AquaData";
import AquaData from './screens/AquaData';

export default function App() {
  return (
    <View style={styles.container}>
      <AquaData />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
