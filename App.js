import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';

// IMPORT STACK NAVIGATION
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Criando ums instancia do STACK NAVIGATOR,
// isso nos permite utilizar comandos para definir a navegação da aplicação
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Sobre" component={Sobre}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}




