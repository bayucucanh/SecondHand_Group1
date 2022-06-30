import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styles2 from '../../../constant/styles';
import ProductCard from '../../../components/ProductCard';
import { COLORS, FONTS, SIZES } from '../../../constant';

function Produk() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.cardTambah}>
        <TouchableOpacity style={styles.tambahProduk} onPress={() => navigation.navigate('JualFull')}>
          <Icon name="plus" size={30} style={{ color: COLORS.neutral3 }} />
          <Text style={{ ...FONTS.bodyNormalRegular, color: COLORS.neutral3 }}>Tambah Produk</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: SIZES.padding3 }}>
        <ProductCard
          name="Sepatu"
          categories="haha"
          basePrice="20"
          imageUrl={null}
          style={{ maxWidth: 160 }}
        />
      </View>
    </View>
  );
}

export default Produk;

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    marginVertical: SIZES.base,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTambah: {
    maxWidth: 160,
  },
  tambahProduk: {
    borderWidth: 2,
    borderRadius: SIZES.radius1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: SIZES.height * 0.3,
    borderStyle: 'dashed',
    borderColor: COLORS.neutral2,
    marginLeft: 5,
  },
});
