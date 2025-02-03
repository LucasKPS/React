import React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Ofertas = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Melhores preços</Text>
      <Text style={styles.description}>
        Essas são nossas ofertas
      </Text>
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Image 
            source={{ uri: 'https://m.media-amazon.com/images/I/61kwdPH8+xL._AC_SY200_.jpg' }} 
            style={styles.image} 
          />
          <Text style={styles.cardText}>Controle Dualshock 4 - PlayStation 4 - Preto por R$299,99</Text>
        </View>
        <View style={styles.card}>
          <Image 
            source={{ uri: 'https://m.media-amazon.com/images/I/41zrg4ISTBL._AC_SY200_.jpg' }} 
            style={styles.image} 
          />
          <Text style={styles.cardText}>iPad Pro 4ª Geração Apple, 11", 128GB, M2, Wi-Fi, Câmera 12MP, iPadOS 16, Cinza Espacial R$ 4,899,99</Text>
        </View>
        <View style={styles.card}>
          <Image 
            source={{ uri: 'https://m.media-amazon.com/images/I/51DF-14iHzL._AC_SY200_.jpg' }} 
            style={styles.image} 
          />
          <Text style={styles.cardText}>PlayStation DualSense Controle sem fio – Midnight Black por R$ 399,99</Text>
        </View>
        <View style={styles.card}>
          <Image 
            source={{ uri: 'https://m.media-amazon.com/images/I/61xj58FOB+L._AC_SY200_.jpg' }} 
            style={styles.image} 
          />
          <Text style={styles.cardText}>Elden Ring - PlayStation 4 por R$ 219,99</Text>
        </View>
      </View>
      <Button
        title="Voltar à página inicial"
        onPress={() => navigation.goBack()}
        color="#003366" // Azul escuro para o botão
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Cinza muito claro para o fundo
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#003366', // Azul escuro para o título
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333', // Cinza escuro para a descrição
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '42%', // Ajusta a largura para caber quatro cards em uma linha
    backgroundColor: '#fff', // Branco para o card
    borderRadius: 8,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 150,
    height: 100,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#003366', // Azul escuro para o texto do card
  },
});

export default Ofertas;
