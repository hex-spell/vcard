import { StyleSheet } from 'react-native';
import { ScreenProps } from 'react-native-screens';

import { View } from '../components/Themed';
import { Title } from "../components/Title"

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingLeft: 15,
    paddingRight: 15,
    minHeight: "100%"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

const HomeScreen: React.FC<ScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Title>Mis tarjetas</Title>
      <Title>Otras tarjetas</Title>
    </View>
  );
}

export default HomeScreen;