import { StatusBar } from 'expo-status-bar';
import { Platform, Text, View } from 'react-native';
const CartScreen = () => {
  return (
    <View>
      <Text>cart</Text>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
};

export default CartScreen;
