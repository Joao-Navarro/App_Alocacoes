import { NavigationContainer} from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from './Screen/Inicio'; 

import Professores from './Screen/Professores'; 

import Sala from './Screen/Sala';

import Alocacao from './Screen/Alocacao';

import Visao from './Screen/Visao';



const Stack = createNativeStackNavigator();

const App = () => {

 return (
   

 <NavigationContainer>

 <Stack.Navigator initialRouteName="Inicio">

 <Stack.Screen name="Inicio" component={Inicio} />

 <Stack.Screen name="Professores" component={Professores} />

 <Stack.Screen name="Sala" component={Sala} />

 <Stack.Screen name="Alocacao" component={Alocacao} />

 <Stack.Screen name="Visao" component={Visao} />

 </Stack.Navigator>
 </NavigationContainer>
 
 );
}


export default App;