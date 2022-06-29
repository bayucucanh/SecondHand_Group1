import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles2 from '../../../constant/styles';
import ProductCard from '../../../components/ProductCard'

const Produk = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardTambah}>
        <TouchableOpacity style={styles.tambahProduk}>
          <Icon name='plus' size={30} />
          <Text>Tambah Produk</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginRight: 5 }}>
        <ProductCard
          name={"Sepatu"}
          categories={"haha"}
          basePrice={"20"}
          imageUrl={null}
          style={{ maxWidth: 160 }}
        />
      </View>
    </View>
  )
}

export default Produk

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  cardTambah: {
    maxWidth: 160
  },
  tambahProduk: {
    borderWidth: 1,
    alignItems: "center",
    paddingVertical: 80,
    width: 150,
    borderStyle: "dashed",
    borderColor: "gray",
    marginLeft: 5
  }
})