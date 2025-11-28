import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import Input from '../components/Input';
import { useSQLiteContext } from 'expo-sqlite';

const Login = ({navigation}) => {

  //funções uteis

  const db = useSQLiteContext();

  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Por favor, preencha email e senha.');
      return;
    }

    try {
      const usuariosEncontrados = await db.getAllAsync(
        'SELECT * FROM usuarios WHERE email = ? AND senha = ?',
        [email, senha]
      );

      if (usuariosEncontrados.length > 0) {
        Alert.alert('Login realizado com sucesso!');
        navigation.navigate('AboutUs');
      } else {
        Alert.alert('Email ou senha incorretos.');
      }
    } catch (error) {
      console.error('Erro ao realizar login:', error);
      Alert.alert('Ocorreu um erro ao tentar fazer login.');
    }
  };

  return (
    <View>
      <LinearGradient
        colors={['#42a1f5', '#03bafc', '#42c5f5']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          height: Dimensions.get('window').height * 0.2,
          width: '100%',
          alignItems: 'center',
          paddingTop: 40,
        }}>
        <Text style={{color: 'white', fontSize: 31, fontWeight: 'bold'}}>
         Seja Bem Vindo!
        </Text>
      </LinearGradient>
      <View
        style={{
          elevation: 10,
          backgroundColor: 'white',
          borderRadius: 10,
          margin: 10,
          marginTop: -20,
          paddingVertical: 20,
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            fontSize: 19,
            fontWeight: 'bold',
            color: '#03bafc',
            textAlign: 'center',
          }}>
          LOGIN
        </Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu email"
          placeholderTextColor="gray"
          keyboardType="email-address"
          style={{borderBottomColor: '#03bafc',
        borderBottomWidth: 1,
        paddingVertical: 5,
        marginTop: 5,
        fontSize: 16,
        marginBottom: 15}}
        />
        <TextInput
          value={senha}
          onChangeText={setSenha}
          placeholder="********"
          placeholderTextColor="gray"
          secureTextEntry={true}
          style={{borderBottomColor: '#03bafc',
        borderBottomWidth: 1,
        paddingVertical: 5,
        marginTop: 5,
        fontSize: 16,
        marginBottom: 15}}
        />
        <TouchableOpacity onPress={handleLogin}>
        <LinearGradient
          colors={['#42a1f5', '#03bafc', '#42c5f5']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            borderRadius: 100,
            width: 150,
            alignSelf: 'center',
            alignItems: 'center',
            paddingVertical: 5,
            marginTop: 100,
            marginBottom: 10,
          }}>
          <Text style={{color: 'white', fontSize: 19}}>LOGIN</Text>
        </LinearGradient>
        </TouchableOpacity>
        <Text style={{color: '#03bafc', fontSize: 16, textAlign: 'center'}}>
          Não possui uma conta?{' '}
          <Text onPress={() => navigation.navigate('Signup')}>Crie agora!</Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;