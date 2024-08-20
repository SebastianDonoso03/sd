import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const HomeScreen = ({  }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/gold.png')} style={styles.goldBarsIcon} />
        <Text style={styles.headerTitle}>Inicio</Text>
      </View>
      <View style={styles.goldBarImageContainer}>
        <Image source={require('../assets/gold-bar.png')} style={styles.goldBarImage} />
      </View>
      <Text style={styles.goldTitle}>Descubre la Elegancia del Oro</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Joyas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Monedas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Lingotes</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.popularProductsTitle}>Productos populares</Text>
      <View style={styles.productsContainer}>
        <View style={styles.product}>
          <Image source={require('../assets/moneda.png')} style={styles.productImage} />
          <Text style={styles.productName}>1/2 oz. Aguila Americana</Text>
          <Text style={styles.productPrice}>$1,000</Text>
        </View>
        <View style={styles.product}>
          <Image source={require('../assets/cadena.png')} style={styles.productImage} />
          <Text style={styles.productName}>Cadena de Oro 14k</Text>
          <Text style={styles.productPrice}>$2,500</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <MaterialCommunityIcons name="home" size={24} color="#000" />
          <Text style={styles.footerButtonText}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>
          <MaterialCommunityIcons name="format-list-bulleted" size={24} color="#000" />
          <Text style={styles.footerButtonText}>Catalogo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerButton}>
          <MaterialCommunityIcons name="percent" size={24} color="#000" />
          <Text style={styles.footerButtonText}>Ofertas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <MaterialCommunityIcons name="cart" size={24} color="#000" />
          <Text style={styles.footerButtonText}>Carrito</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  goldBarsIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  goldBarImageContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  goldBarImage: {
    width: 200,
    height: 200,
  },
  goldTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
  },
  button: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 8,
    width: '30%',
  },
  buttonText: {
    textAlign: 'center',
  },
  popularProductsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginLeft: 16,
  },
  productsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  product: {
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  productName: {
    fontWeight: 'bold',
  },
  productPrice: {
    color: '#888',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  footerText: {
    fontSize: 12,
  },
  footerButtonText: {
    fontSize: 12,
  },
});

export default HomeScreen;