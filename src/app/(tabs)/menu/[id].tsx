import { Stack, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: 'Details: ' + id }} />
      <Text style={{ fontSize: 20, color: 'white' }}>
        Product Details for id: {id}
      </Text>
    </View>
  );
};

export default ProductDetailsScreen;
