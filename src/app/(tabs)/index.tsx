import { StyleSheet, Image } from "react-native";
import { Text, View } from "../../components/Themed";
import Colors from "@/src/constants/Colors";
import products from "../../../assets/data/products";

const product = products[1];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10, // space inside the container
    borderRadius: 20, // rounding of the corners
  },
  image: {
    width: "100%", // takes full width of the screen
    aspectRatio: 1, // calculates height based of width
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
    marginVertical: 10, // positve number means margin under
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
