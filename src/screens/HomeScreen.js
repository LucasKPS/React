import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// URL de uma imagem de exemplo
const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjnIwY2c_pLXybmoSDikwCF6hehjs0xb6UzQ&s';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Melhor oferta:</Text>
      <Text style={styles.description}>
        Conheça nossos melhores produtos pelo melhor preço
      </Text>
      
      <View style={styles.card}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.cardImage}
        />
        <Text style={styles.cardText}>Console PS5 por apenas R$ 3,999</Text>
      </View>
      
      <Button
        title="Ver mais ofertas"
        onPress={() => navigation.navigate('Ofertas')}
        color="#004080" // Azul escuro para o botão
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0', // Cinza claro para o fundo
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
  card: {
    width: '100%',
    maxWidth: 300,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff', // Branco para o card
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
    alignItems: 'center',
    padding: 10,
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  cardText: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    color: '#003366', // Azul escuro para o texto do card
  },
});

export default HomeScreen;
