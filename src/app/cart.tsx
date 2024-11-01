import { useCart } from '@providers/CartProvider';
import { StatusBar } from 'expo-status-bar';
import { PropsWithChildren } from 'react';
import { Platform, Text, View } from 'react-native';

const CartScreen = () => {
  const { items } = useCart();
  return (
    <View>
      <Text>cart items length: {items.length}</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};

export default CartScreen;
