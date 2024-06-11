import { View, Text, Button, StyleSheet } from 'react-native';

const Alocacao = ({ navigation }) => {

 return (

 <View style={styles.container}>


 <Text style={styles.text}>ALOCAÇÃO</Text>

 </View>
 );
};

const styles = StyleSheet.create({

    container:{
    flex: 1, 
     backgroundColor: '#264653',   
  },

  text:{
    color:'#E76F51',
    fontSize:44,
    margin: 50,
    textAlign: 'center',
  },
})

export default Alocacao;