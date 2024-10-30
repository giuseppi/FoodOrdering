import { defaultPizzaImage } from '@/src/components/ProductListItem';
import products from '@assets/data/products';
import Button from '@components/Button';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View, useColorScheme } from 'react-native';

const sizes = ['S', 'M', 'L', 'XL'];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const [selectedSize, setSelectedSize] = useState('M');

  const product = products.find((p) => p.id.toString() === id);

  const addToCart = () => {
    console.log('added', selectedSize, 'to cart!');
  };

  const colorScheme = useColorScheme();

  if (!product) {
    return <Text>Product not found!</Text>;
  }

  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />

      <Text style={styles.text}>Select size</Text>

      {/* Displays sizes */}
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            onPress={() => {
              setSelectedSize(size);
            }}
            style={[
              styles.sizeContainer,
              {
                backgroundColor: selectedSize === size ? 'skyblue' : 'grey',
              },
            ]}
            key={size}
          >
            <Text
              style={[
                styles.size,
                {
                  color: selectedSize === size ? 'black' : 'white',
                },
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.price}>${product.price}</Text>
      <Button
        onPress={() => {
          addToCart();
        }}
        text="Add to cart"
      />
    </View>
  );
};

export default ProductDetailsScreen;

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  text: {
    color: 'black',
    fontSize: 14,
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  sizeContainer: {
    backgroundColor: 'grey',
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  size: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  price: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 'auto',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  text: {
    color: 'white',
    fontSize: 14,
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  sizeContainer: {
    backgroundColor: 'grey',
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  size: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  price: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 'auto',
  },
});
