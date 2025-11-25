import {View, Text, Dimensions, TextInput, Input, TouchableOpacity} from 'react-native';
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Login = ({navigation}) =>{
    return (
        <View>
            <LinearGradient 
            colors={['#42a1f5', '#03bafc', '#42c5f5']} 
            start={{ x:0, y:0}} 
            end={{ x:1, y: 0}} 
            style={{borderBottomLeftRadius: 15, borderBottomRightRadius: 15, height: Dimensions.get('window').height * 0.20, width:'100%', alignItems: "center", paddingTop: 40}}>

        <Text style={{color: 'white', fontSize: 31, fontWeight: 'bold'}}>Ola mundo</Text>

            </LinearGradient>
            <View 
              style={{elevation: 10, backgroundColor:"White", borderRadius:10, margin: 10, marginTop: -20, paddingVertical: 20, paddingHorizontal: 15}}>

                <Text 
                   style={{fontSize: 19, fontWeight: 'bold', color:'#03bafc'}}> 
                   LOGIN
                </Text>
                <Input title='Usuário' placeholder='Usuário' keyboard= 'default'/>
                <Input title='Senha' placeholder='********' keyboard= 'default' is_password={true}
                />
                <Text style={{color: '#03bafc', fontSize: 16, textAlign: 'right'}}>Esqueceu sua senha?</Text>
                <LinearGradient onPress={() => {}} colors={['#42a1f5', '#03bafc', '#42c5f5']} 
            start={{ x:0, y:0}} 
            end={{ x:1, y: 0}} style={{borderRadius: 100, width: 150, alignSelf: "center", paddingVertical: 5, marginTop: 100, marginBottom:10}}> 
                    <Text style={{color:"white", fontSize:19}}>LOGIN</Text>
                </LinearGradient>
                <Text style={{color: '#03bafc', fontSize: 16, textAlign: 'center'}}>Não possui conta?{''}
                    <Text onPress={()=> navigation.navigate('Signup')}>Crie agora!</Text>
                </Text>
            </View>
        </View>
    )
}

export default Login;