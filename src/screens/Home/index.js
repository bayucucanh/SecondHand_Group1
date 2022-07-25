/* eslint-disable no-nested-ternary */
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  LogBox,
  RefreshControl,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useEffect, useState, useReducer } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PagerView from 'react-native-pager-view';
import { useIsFocused } from '@react-navigation/native';
import { COLORS, SIZES, FONTS } from '../../constant';
import {
  CustomButton,
  IconButton,
  Loader,
  ProductCard,
  SearchBar,
  Empty,
} from '../../components';
import FocusAwareStatusBar from '../../utils/focusAwareStatusBar';
import {
  getDataProduct,
  getDataCategories,
  getDataBanner,
  getDataProfile,
  setRefresh,
} from '../../redux/actions';
import { SelectionImage } from '../../assets';

function Home({ navigation }) {
  const isFocused = useIsFocused();
  const { t } = useTranslation();
  const [searchProduct, setSearchProduct] = useState('');
  const [categorySelectedId, setCategorySelectedId] = useState(0);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const dataProduct = useSelector((state) => state.home.dataProduct);
  const dataCategories = useSelector((state) => state.home.categories);
  const dataBanner = useSelector((state) => state.home.dataBanner);
  const loading = useSelector((state) => state.global.isLoading);
  const refresh = useSelector((state) => state.global.isRefresh);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    console.log('Category ID', categorySelectedId);
    dispatch(getDataCategories());
    dispatch(getDataBanner());
    setSearchProduct('');
    if (isFocused) {
      dispatch(
        getDataProduct({
          status: 'available',
          category_id: categorySelectedId !== 0 ? categorySelectedId : '',
          search: '',
          page,
          per_page: 10,
        }),
      );
    }
  }, [dispatch, categorySelectedId, page, isFocused]);

  const Refresh = () => {
    dispatch(setRefresh(true));
    dispatch(
      getDataProduct({
        status: 'available',
        category_id: categorySelectedId !== 0 ? categorySelectedId : '',
        search: searchProduct,
        page,
        per_page: 10,
      }),
    );
  };

  const footerHome = () => (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: SIZES.padding4,
      }}
    >
      <CustomButton
        buttonStyle={{ width: '35%' }}
        title={t('before')}
        size="small"
        enabled={page !== 1}
        onPress={() => setPage(page - 1)}
      />
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ ...FONTS.bodyNormalMedium }}>
          {t('pages')}
          {page}
        </Text>
      </View>
      <CustomButton
        buttonStyle={{ width: '35%' }}
        title={t('next')}
        size="small"
        enabled
        onPress={() => setPage(page + 1)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" color={COLORS.white} />
      <ScrollView
        nestedScrollEnabled
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={() => Refresh()} />
        }
      >
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Search', { value: searchProduct })}
        >
          <View>
            <SearchBar onChangeText={setSearchProduct} value={searchProduct} />
          </View>
        </TouchableWithoutFeedback>
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
              onPress={() => {
                setCategorySelectedId(0);
                setPage(1);
              }}
            />
            {dataCategories?.map((item) => (
              <IconButton
                key={item?.id}
                icon="search"
                text={item?.name}
                active={categorySelectedId === item?.id}
                onPress={() => {
                  setCategorySelectedId(item?.id);
                  setPage(1);
                }}
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
          ) : (
            <FlatList
              data={dataProduct}
              columnWrapperStyle={{
                marginBottom: SIZES.padding4,
                justifyContent: 'space-between',
                paddingHorizontal: SIZES.base,
              }}
              initialNumToRender={7}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => item.id + index.toString()}
              maxToRenderPerBatch={1000}
              windowSize={60}
              updateCellsBatchingPeriod={60}
              ListFooterComponent={dataProduct?.length > 0 && footerHome}
              ListEmptyComponent={<Empty title={t('emptyProduct')} />}
              renderItem={({ item }) => (
                <ProductCard
                  name={item.name}
                  categories={item.Categories}
                  basePrice={item.base_price}
                  imageUrl={item.image_url}
                  style={{ maxWidth: SIZES.width * 0.4 }}
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
