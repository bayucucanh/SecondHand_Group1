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
  IconButton,
  Loader,
  ProductCard,
  SearchBar,
} from '../../components';
import FocusAwareStatusBar from '../../utils/focusAwareStatusBar';
import {
  getDataProduct,
  getDataCategories,
  getDataBanner,
} from '../../redux/actions';

function Home({ navigation }) {
  const { t } = useTranslation();
  const [searchProduct, setSearchProduct] = useState('');
  const [categorySelectedId, setCategorySelectedId] = useState(0);

  const dispatch = useDispatch();
  const dataProduct = useSelector((state) => state.home.dataProduct);
  const dataCategories = useSelector((state) => state.home.categories);
  const dataBanner = useSelector((state) => state.home.dataBanner);
  const loading = useSelector((state) => state.global.isLoading);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    dispatch(getDataCategories());
    dispatch(getDataBanner());
    dispatch(
      getDataProduct({
        category_id: categorySelectedId !== 0 ? categorySelectedId : '',
        search: searchProduct,
        status: 'available',
      }),
    );
  }, [dispatch, searchProduct, categorySelectedId]);

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" color={COLORS.white} />
      <ScrollView nestedScrollEnabled>
        <SearchBar onChangeText={setSearchProduct} value={searchProduct} />
        <PagerView
          style={{ height: SIZES.height * 0.25 }}
          initialPage={0}
          showPageIndicator
        >
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
                  height: SIZES.height * 0.25 - SIZES.padding3 * 2,
                  width: SIZES.width - SIZES.padding3 * 2,
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
              active={categorySelectedId === 0}
              onPress={() => setCategorySelectedId(0)}
            />
            {dataCategories?.map((item) => (
              <IconButton
                key={item?.id}
                icon="search"
                text={item?.name}
                active={categorySelectedId === item?.id}
                onPress={() => setCategorySelectedId(item?.id)}
              />
            ))}
          </ScrollView>
          {loading ? (
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Loader />
              <Loader />
            </View>
          ) : dataProduct.length === 0 ? (
            <Text style={{ fontSize: 15 }}>Tidak ada produk</Text>
          ) : (
            <FlatList
              data={dataProduct}
              columnWrapperStyle={{
                marginBottom: SIZES.padding4,
                justifyContent: 'space-between',
              }}
              initialNumToRender={7}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => item.id + index.toString()}
              maxToRenderPerBatch={1000}
              windowSize={60}
              updateCellsBatchingPeriod={60}
              renderItem={({ item }) => (
                <ProductCard
                  name={item.name}
                  categories={item.Categories}
                  basePrice={item.base_price}
                  imageUrl={item.image_url}
                  style={{ maxWidth: SIZES.width * 0.42 }}
                  onPress={() => navigation.navigate('Detail', { productId: item.id })}
                />
              )}
            />
          )}
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
