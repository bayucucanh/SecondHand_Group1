import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { COLORS, SIZES, FONTS } from '../../constant';
import { IconButton, ProductCard, SearchBar } from '../../components';
import FocusAwareStatusBar from '../../utils/focusAwareStatusBar';
import {
  getDataProfile,
  getDataProduct,
  getDataCategories,
} from '../../redux/actions';
import { Box } from '../../assets';

function Home({ navigation }) {
  const { t, i18n } = useTranslation();
  const [btnActive, setBtnActive] = useState('');
  const [btnAllActive, setBtnAllActive] = useState(true);
  const [searchProduct, setSearchProduct] = useState('');
  const dispatch = useDispatch();
  const dataProduct = useSelector((state) => state.home.dataProduct);
  const dataCategories = useSelector((state) => state.home.categories);

  useEffect(() => {
    // LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    dispatch(getDataCategories());
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

  const headerFlatlist = () => (
    <LinearGradient colors={['#FFE9C9', '#FFFFFF']} locations={[0.6, 1]}>
      <SearchBar onChangeText={getProductBySearch} value={searchProduct} />
      <View
        style={{
          flexDirection: 'row',
          marginVertical: SIZES.padding6,
          paddingHorizontal: SIZES.padding5,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={{
              ...FONTS.titleLargeBold,
              color: 'black',
            }}
          >
            Bulan Ramadhan Banyak diskon!
          </Text>
          <Text
            style={{
              ...FONTS.bodyLargeRegular,
              color: COLORS.neutral5,
              marginTop: SIZES.h1,
            }}
          >
            Diskon Hingga
          </Text>
          <Text
            style={{
              ...FONTS.bodyLargeMedium,
              color: COLORS.alertDanger,
            }}
          >
            60%
          </Text>
        </View>
        <Image
          source={Box}
          style={{
            width: 127,
            height: 127,
          }}
        />
      </View>
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
              icon="category"
              text={item.name}
              active={btnActive === item.id}
              onPress={() => getProductByCategory(item.id)}
            />
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" color="#FFE9C9" />
      {dataProduct.length === 0 ? (
        <Text style={{ fontSize: 15 }}>Tidak ada produk</Text>
      ) : (
        <FlatList
          data={dataProduct}
          numColumns={2}
          columnWrapperStyle={{
            flex: 1,
            marginHorizontal: SIZES.padding5,
            marginBottom: SIZES.padding4,
            justifyContent: 'space-between',
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id + index.toString()}
          ListHeaderComponent={headerFlatlist}
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
      )}
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
