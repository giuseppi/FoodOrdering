import products from '@assets/data/products';
import ProductListItem from '@components/ProductListItem';
import { Stack } from 'expo-router';
import { FlatList, StyleSheet, View } from 'react-native';

export default function MenuScreen() {
  return (
    <View style={styles.background}>
      <Stack.Screen options={{ title: 'Menu' }} />
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 15 }} // between rows; padding is more space between border
        columnWrapperStyle={{ gap: 10 }} // between columns
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'grey',
  },
});
