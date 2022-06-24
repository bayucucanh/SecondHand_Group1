import {
  Text,
  TextInput,
  View,
  StyleSheet,
  ScrollView,
  StatusBar,
  FlatList,
  LogBox,
} from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';

import { alertDanger, neutral1, neutral5 } from '../../constant/color';
import { IconButton, ProductCard, SearchBar } from '../../components';
import FocusAwareStatusBar from '../../utils/focusAwareStatusBar';
import {
  getDataProfile,
  getDataProduct,
  getDataCategories,
} from '../../redux/actions';
import { API_GET_PRODUCT } from '../../config/api';

function Home() {
  const [btnActive, setBtnActive] = useState('');
  const [btnAllActive, setBtnAllActive] = useState(true);
  const [searchProduct, setSearchProduct] = useState('');
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.login.userData.access_token);
  const dataProduct = useSelector((state) => state.home.dataProduct);
  const dataCategories = useSelector((state) => state.home.categories);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    dispatch(getDataProfile(accessToken));
    dispatch(getDataCategories());
    getAllProduct();
  }, [dispatch]);

  const getProductBySearch = useCallback((nameProduct) => {
    setSearchProduct(nameProduct);
    dispatch(getDataProduct(`${API_GET_PRODUCT}?search=${nameProduct}`));
  }, []);

  const getProductByCategory = useCallback(
    (categoryId) => {
      setBtnActive(categoryId);
      setBtnAllActive(false);
      dispatch(getDataProduct(`${API_GET_PRODUCT}?category_id=${categoryId}`));
    },
    [dispatch, btnActive],
  );

  const getAllProduct = useCallback(() => {
    setBtnActive(false);
    setBtnAllActive(true);
    dispatch(getDataProduct(`${API_GET_PRODUCT}`));
  }, [dispatch, btnActive]);

  return (
    <ScrollView style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" color="#FFE9C9" />
      <LinearGradient colors={['#FFE9C9', '#FFFFFF']} locations={[0.6, 1]}>
        <SearchBar onChangeText={getProductBySearch} value={searchProduct} />
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 32,
            paddingHorizontal: 24,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 20,
                color: 'black',
              }}
            >
              Bulan Ramadhan Banyak diskon!
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                color: neutral5,
                marginTop: 12,
              }}
            >
              Diskon Hingga
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 18,
                color: alertDanger,
              }}
            >
              60%
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'blue',
              width: 127,
              height: 127,
            }}
          />
        </View>
        <View style={{ marginHorizontal: 24 }}>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 16,
              color: neutral5,
            }}
          >
            Telusuri Kategori
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <IconButton
              icon="category"
              text="Semua"
              active={btnAllActive}
              onPress={() => getAllProduct()}
            />
            {dataCategories?.map((item) => (
              <IconButton
                key={item.id}
                icon="category"
                text={item.name}
                active={btnActive === item.id}
                onPress={() => getProductByCategory(item.id)}
              />
            ))}
          </ScrollView>
        </View>
      </LinearGradient>
      <View
        style={{
          marginTop: 16,
          marginHorizontal: 24,
          marginBottom: 38,
          flexDirection: 'row',
          justifyContent: 'space-around',
          flex: 1,
        }}
      >
        {dataProduct.length === 0 ? (
          <Text style={{ fontSize: 15 }}>Tidak ada produk</Text>
        ) : (
          <FlatList
            data={dataProduct}
            numColumns={2}
            columnWrapperStyle={{ flex: 1, justifyContent: 'space-between' }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item.id + index.toString()}
            renderItem={({ item }) => (
              <ProductCard
                name={item.name}
                categories={item.Categories}
                basePrice={item.base_price}
                imageUrl={item.image_url}
                style={{ maxWidth: 160 }}
              />
            )}
          />
        )}
      </View>
      <View />
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: neutral1,
  },
});
