import {
  FlatList, StyleSheet, Text, View,
} from 'react-native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import ProductCard from '../../../components/ProductCard';
import { COLORS, FONTS, SIZES } from '../../../constant';
import { getDataSellerProduct } from '../../../redux/actions/getSellerProduct';

function Produk() {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();
  const isFocused = useIsFocused();
  const accessToken = useSelector((state) => state.login.userData.access_token);

  const productList = useSelector((state) => state.sellerProduct.sellerProductList);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isFocused) {
      dispatch(getDataSellerProduct(accessToken));
    }
  }, []);

  return (
    <View style={styles.container}>
      {productList.length < 5 && (
        <View style={styles.cardTambah}>
          <TouchableOpacity style={styles.tambahProduk} onPress={() => navigation.navigate('JualFull', { data: false })}>
            <Icon name="plus" size={30} style={{ color: COLORS.neutral3 }} />
            <Text style={{ ...FONTS.bodyNormalRegular, color: COLORS.neutral3 }}>{t('addProduct')}</Text>
          </TouchableOpacity>
        </View>
      )}
      {productList.map((item) => (
        <View key={item.id} style={{ marginBottom: SIZES.padding3 }}>
          <ProductCard
            name={item.name}
            categories={item.Categories}
            basePrice={item.base_price}
            imageUrl={item.image_url}
            style={{ maxWidth: 160 }}
            // onPress={() => console.log(item.Categories)}
            onPress={() => navigation.navigate('Product', { id: item.id, list: true })}
          />
        </View>
      ))}

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
