import { useState } from "react"
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';



const Visao = ({ navigation }) => {
  const [campoID, SetCampoID] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>VISÃO</Text>

      <TextInput
      style={styles.input}
        placeholder="Digite um ID"
        placeholderTextColor="#FFFF"
        value={campoID}
        onChangeText={(Number) => SetCampoID(Number)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#264653',
  },

  text: {
    color: '#E76F51',
    fontSize: 44,
    margin: 50,
    textAlign: 'center',
  },

  input:{

    backgroundColor: '#E76F51',
    fontSize: 30,
    margin: 35,

  }
});

export default Visao;
