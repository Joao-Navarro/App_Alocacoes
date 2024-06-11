import { View, Text, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
 return (
 <View style={styles.container}>


 <Text style={styles.text}>MENU</Text>

<View style={styles.botao}>

 <Button style={styles.botao}

 title="Professores"
 
 onPress={() => navigation.navigate('Professores')}

 color={"#E76F51"}
 />

 </View>


<View style={styles.botao}>

 <Button

 title="Salas"
 
 onPress={() => navigation.navigate('Sala')}

 color={"#E76F51"}

 />
</View>

<View style={styles.botao}>
  <Button

 title="Alocação"
 
 onPress={() => navigation.navigate('Alocacao')}

 color={"#E76F51"}
 />
 </View>

 <View style={styles.botao}>
  <Button

 title="Visao"
 
 onPress={() => navigation.navigate('Visao')}

 color={"#E76F51"}
 />
 </View>

 </View>
 );
};

const styles = StyleSheet.create({

  container:{
    flex: 1, 
    justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#264653',   
  },

  text:{
    color:'white',
    fontSize:50,
    margin: 50,
  },


  botao:{
    width:300,
    height:100,
    color:"#E76F51",
    margin: 1
  }

});
export default HomeScreen;