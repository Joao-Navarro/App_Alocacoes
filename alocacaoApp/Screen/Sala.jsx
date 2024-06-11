import { View, Text, Button, StyleSheet } from 'react-native';
const Sala = ({ navigation }) => {

 return (

 <View style={styles.container}>

 <Text style={styles.text}>SALAS</Text>
 
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
    fontSize:50,
    margin: 50,
    textAlign: 'center'
  },
})

export default Sala;