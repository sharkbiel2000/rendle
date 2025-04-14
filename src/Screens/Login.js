import { Text, View, StyleSheet, Image } from 'react-native';
import Input from '../Components/Input';
import Botao from '../Components/Botao';


export default function Login() {

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 40,
        }}>
        <Image
          style={{ height: 120, width: 120 }}
          source={require('../Assets/Logo 1.png')}
        />
      </View>
      <Text style={styles.paragraph}>rendler</Text>
      <View
        style={{
          padding: 60,
          margin: 10,
          backgroundColor: 'green',
          borderRadius: 20,
          borderColor: 'white',
          borderWidth: 2
      }}>

        <View style={{ margin: 5 }}>
          <Input 
          cor="white" 
          nome="Digite o seu usuário" 
        />
        </View>

        <View style={{ margin: 5, borderRadius: 5 }}>
          <Input 
          cor="white" 
          nome="Digite a sua senha" 
        />
        </View>

        <View style={{ margin: 5 }}>
          <Botao
            nome="Entrar"
            onPress={() => alert('Bem-vindo(a)!')}
            cor="black"
          />
        </View>
        <View style={{ margin: 5 }}>
          <Botao
            nome="Cadastre-se"
            onPress={() => alert('Crie o seu cadastro!')}
            cor="red"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'blue',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
