/* eslint-disable no-nested-ternary */
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  LogBox,
} from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PagerView from 'react-native-pager-view';
import { COLORS, SIZES, FONTS } from '../../constant';
import {
  IconButton, Loader, Loading, ProductCard, SearchBar,
} from '../../components';
import FocusAwareStatusBar from '../../utils/focusAwareStatusBar';
import {
  getDataProfile,
  getDataProduct,
  getDataCategories,
  getDataBanner,
} from '../../redux/actions';
import { Box } from '../../assets';

function Home({ navigation }) {
  const { t } = useTranslation();
  const [btnActive, setBtnActive] = useState('');
  const [btnAllActive, setBtnAllActive] = useState(true);
  const [searchProduct, setSearchProduct] = useState('');
  const dispatch = useDispatch();
  const dataProduct = useSelector((state) => state.home.dataProduct);
  const dataCategories = useSelector((state) => state.home.categories);
  const dataBanner = useSelector((state) => state.home.dataBanner);
  const loading = useSelector((state) => state.global.isLoading);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    dispatch(getDataCategories());
    dispatch(getDataBanner());
    getAllProduct();
  }, [dispatch]);

  const getProductBySearch = useCallback((nameProduct) => {
    setSearchProduct(nameProduct);
    dispatch(getDataProduct(`?search=${nameProduct}`));
  }, []);

  const getProductByCategory = useCallback(
    (categoryId) => {
      setBtnActive(categoryId);
      setBtnAllActive(false);
      dispatch(getDataProduct(`?category_id=${categoryId}`));
    },
    [dispatch, btnActive],
  );

  const getAllProduct = useCallback(() => {
    setBtnActive(false);
    setBtnAllActive(true);
    dispatch(getDataProduct('/'));
  }, [dispatch, btnActive]);

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" color={COLORS.white} />
      <ScrollView nestedScrollEnabled>
        <SearchBar onChangeText={getProductBySearch} value={searchProduct} />
        <PagerView style={{ height: SIZES.height * 0.25 }} initialPage={0} showPageIndicator>
          {dataBanner?.map((item) => (
            <View
              key={item.id}
              style={{
                marginVertical: SIZES.padding3,
                marginHorizontal: SIZES.padding3,
              }}
            >
              <Image
                resizeMode="contain"
                source={{ uri: item.image_url }}
                style={{
                  height: (SIZES.height * 0.25) - (SIZES.padding3 * 2),
                  width: SIZES.width - (SIZES.padding3 * 2),
                  borderRadius: SIZES.radius2,
                }}
              />
            </View>
          ))}
        </PagerView>
        <View style={{ marginHorizontal: SIZES.padding5 }}>
          <Text
            style={{
              ...FONTS.bodyLargeMedium,
              color: COLORS.neutral5,
            }}
          >
            {t('searchCategoryTitle')}
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginVertical: SIZES.padding3 }}
          >
            <IconButton
              icon="search"
              text="Semua"
              active={btnAllActive}
              onPress={() => getAllProduct()}
            />
            {dataCategories?.map((item) => (
              <IconButton
                key={item.id}
                icon="search"
                text={item.name}
                active={btnActive === item.id}
                onPress={() => getProductByCategory(item.id)}
              />
            ))}
          </ScrollView>
          {loading ? (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Loader />
              <Loader />
            </View>
          ) : dataProduct.length === 0 ? (
            <Text style={{ fontSize: 15 }}>Tidak ada produk</Text>
          ) : (
            <FlatList
              data={dataProduct}
              initialNumToRender={7}
              numColumns={2}
              columnWrapperStyle={{
                marginBottom: SIZES.padding4,
                justifyContent: 'space-between',
              }}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => item.id + index.toString()}
              renderItem={({ item }) => (
                <ProductCard
                  name={item.name}
                  categories={item.Categories}
                  basePrice={item.base_price}
                  imageUrl={item.image_url}
                  style={{ maxWidth: 160 }}
                  onPress={() => navigation.navigate('Detail', { productId: item.id })}
                />
              )}
            />
          ) }
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.neutral1,
  },
});
