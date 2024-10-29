import { Text, View } from '@components/Themed';
import Colors from '@constants/Colors';
import { Image, StyleSheet } from 'react-native';
import { Product } from '../types';

export const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  console.log(product);
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image || defaultPizzaImage }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10, // space inside the container
    borderRadius: 20, // rounding of the corners
  },
  image: {
    width: '100%', // takes full width of the screen
    aspectRatio: 1, // calculates height based of width
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    marginVertical: 10, // positve number means margin under
    color: 'black',
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
