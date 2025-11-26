import React, { useState } from 'react';
import { View, Text, Dimensions, Button, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSQLiteContext } from 'expo-sqlite';
import { insertUsuario, getUsuarios } from '../service/userService';

const Signup = ({ navigation }) => {
  const db = useSQLiteContext(); 

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSignup = async () => {
    const novoUsuario = { nome, email, senha };
    await insertUsuario(db, novoUsuario);
    console.log(await getUsuarios(db));
    navigation.navigate('Login');
  };

  return (
    <View>
      <LinearGradient
        colors={['#42a1f5', '#03bafc', '#42c5f5']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          height: Dimensions.get('window').height * 0.2,
          width: '100%',
          alignItems: 'center',
          paddingTop: 40,
        }}>
        <Text style={{ color: 'white', fontSize: 31, fontWeight: 'bold' }}>
          S.G.Codes
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
          REGISTER
        </Text>
        
        
        <Text style={{fontSize: 16, color: '#03bafc'}}>Username</Text>
        <TextInput 
            value={nome}
            onChangeText={setNome}
            placeholder="Digite seu usuário"
            placeholderTextColor="gray"
            style={{
              borderBottomColor: '#03bafc',
              borderBottomWidth: 1,
              paddingVertical: 0,
              marginTop: 5,
            }}
        />
        <Text style={{fontSize: 16, color: '#03bafc'}}>Email</Text>
        <TextInput 
            value={email}
            onChangeText={setEmail}
            placeholder="Digite seu email"
            placeholderTextColor="gray"
            keyboardType="email-address"
            style={{
              borderBottomColor: '#03bafc',
              borderBottomWidth: 1,
              paddingVertical: 0,
              marginTop: 5,
            }}
        />
        <Text style={{fontSize: 16, color: '#03bafc'}}>Password</Text>
        <TextInput 
            value={senha}
            onChangeText={setSenha}
            placeholder="Digite sua senha"
            placeholderTextColor="gray"
            secureTextEntry={true} 
            style={{
              borderBottomColor: '#03bafc',
              borderBottomWidth: 1,
              paddingVertical: 0,
              marginTop: 5,
            }}
        />
        <TouchableOpacity onPress={handleSignup}>
          <LinearGradient
            colors={['#42a1f5', '#03bafc', '#42c5f5']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              borderRadius: 100,
              width: 150,
              alignSelf: 'center',
              alignItems: 'center',
              paddingVertical: 5,
              marginTop: 50,
              marginBottom: 10,
            }}>
            <Text style={{ color: 'white', fontSize: 19 }}>SIGNUP</Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text style={{ color: '#03bafc', fontSize: 16, textAlign: 'center' }}>
          Already have an account?{' '}
          <Text onPress={() => navigation.navigate('Login')}>Login</Text>
        </Text>
      </View>
    </View>
  );
};

export default Signup;