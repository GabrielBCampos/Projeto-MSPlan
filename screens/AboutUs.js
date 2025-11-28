import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const AboutUs = ({ navigation }) => {

  const contactPage = () => {
    navigation.navigate('ContactUs')
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
      
      <LinearGradient
        colors={['#42a1f5', '#03bafc', '#42c5f5']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Sobre Nós</Text>
      </LinearGradient>

    
      <View style={styles.card}>
        <Text style={styles.appTitle}>MSPLAN</Text>

        <Text style={styles.description}>
          Empresa brasileira, está no mercado há 35 anos, projetando, calculando, planejando e executando obras de estruturas de aço, atendendo a indústria, o comércio, casas de alto padrão, em toda Grande São Paulo, e outros centros urbanos do Brasil.

          Trabalha incansavelmente para que o investimento dos seus clientes tenha o melhor custo benefício, atendendo todas as normas técnicas da ABNT.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.label}>Versão:</Text>
        <Text style={styles.value}>1.0.0</Text>

       
        <TouchableOpacity onPress={contactPage} style={{ marginTop: 20 }}>
          <Text >Entre em contato!</Text>
        </TouchableOpacity>

       
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 30 }}>
          <LinearGradient
            colors={['#42a1f5', '#03bafc', '#42c5f5']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}>
            <Text style={styles.buttonText}>VOLTAR</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    height: Dimensions.get('window').height * 0.2,
    width: '100%',
    alignItems: 'center',
    paddingTop: 50,
  },
  headerTitle: {
    color: 'white',
    fontSize: 31,
    fontWeight: 'bold',
  },
  card: {
    elevation: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 20,
    marginTop: -40, // Faz o card sobrepor o header levemente
    padding: 25,
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#03bafc',
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 15,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#eee',
    marginVertical: 15,
  },
  label: {
    fontSize: 14,
    color: '#03bafc',
    fontWeight: 'bold',
    marginTop: 5,
  },
  value: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  link: {
    color: '#42a1f5',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  button: {
    borderRadius: 100,
    width: 150,
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AboutUs;