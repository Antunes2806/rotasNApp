import { View, Text, Button } from "react-native";
import styles from '../Styles/StyleSheet';
import { useNavigation } from "@react-navigation/native";

export default function Home(){
    const navigation = useNavigation();
    
      return (
        <View style={styles.container}>
        <Text>Tela Home</Text>
        <Button title="Sobre" onPress={() => navigation.navigate("Sobre")} />
        </View>
      )
    };