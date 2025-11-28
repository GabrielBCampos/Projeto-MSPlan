import React, { useState } from 'react';
import { View, Text, Dimensions, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ContactUs = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSend = () => {
    if (!nome || !email || !mensagem) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos para enviar sua mensagem.');
      return;
    }
    
    // Aqui você conectaria com seu backend ou serviço de email
    console.log('Enviando mensagem:', { nome, email, mensagem });
    
    Alert.alert('Sucesso!', 'Sua mensagem foi enviada. Em breve entraremos em contato.');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Header Gradiente */}
      <LinearGradient
        colors={['#42a1f5', '#03bafc', '#42c5f5']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Fale Conosco</Text>
      </LinearGradient>

      {/* Card Principal */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <Text style={styles.description}>
            Preencha o formulário a seguir para receber um orçamento da sua obra, se preferir por contatar nossa equipe em um dos canais de atendimento
          </Text>

          {/* Input Nome */}
          <Text style={styles.label}>Nome</Text>
          <TextInput
            value={nome}
            onChangeText={setNome}
            placeholder="Seu nome completo"
            placeholderTextColor="gray"
            style={styles.input}
          />

          {/* Input Email */}
          <Text style={styles.label}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="seu@email.com"
            placeholderTextColor="gray"
            keyboardType="email-address"
            style={styles.input}
          />

          {/* Input Mensagem (Multiline) */}
          <Text style={styles.label}>Mensagem</Text>
          <TextInput
            value={mensagem}
            onChangeText={setMensagem}
            placeholder="Escreva sua mensagem aqui..."
            placeholderTextColor="gray"
            multiline={true}
            numberOfLines={4}
            style={[styles.input, styles.textArea]}
            textAlignVertical="top" 
          />

          {/* Botão Enviar */}
          <TouchableOpacity onPress={handleSend}>
            <LinearGradient
              colors={['#42a1f5', '#03bafc', '#42c5f5']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.button}>
              <Text style={styles.buttonText}>ENVIAR</Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Botão Voltar (Texto Simples) */}
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 15 }}>
            <Text style={styles.linkText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  headerContainer: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    height: Dimensions.get('window').height * 0.15,
    width: '100%',
    alignItems: 'center',
    paddingTop: 50,
  },
  headerTitle: {
    color: 'white',
    fontSize: 31,
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  card: {
    elevation: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 20,
    marginTop: -30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 15,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 22,
  },
  label: {
    fontSize: 16,
    color: '#03bafc',
    marginTop: 10,
  },
  input: {
    borderBottomColor: '#03bafc',
    borderBottomWidth: 1,
    paddingVertical: 5,
    marginTop: 5,
    fontSize: 16,
    marginBottom: 5,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#03bafc',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    height: 100,
    borderBottomWidth: 1, // Reseta o estilo padrão do input de linha única
  },
  button: {
    borderRadius: 100,
    width: 150,
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkText: {
    color: 'gray',
    fontSize: 16,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default ContactUs;