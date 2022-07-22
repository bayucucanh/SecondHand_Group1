import {
  StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ScrollView,
} from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { t } from 'i18next';
import { useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS, FONTS, SIZES } from '../../constant';
import {
  CustomButton,
  GoBackIcon, Loader, ProductCard, SearchBar, Separator,
} from '../../components';
import { getDataProduct } from '../../redux/actions';
import { SelectionImage } from '../../assets';

function Search({ navigation, route }) {
  const { value } = route.params;

  const [searchProduct, setSearchProduct] = useState(value);
  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const dataProduct = useSelector((state) => state.home.dataProduct);
  const loading = useSelector((state) => state.global.isLoading);

  useEffect(() => {
    if (isFocused) {
      dispatch(
        getDataProduct({
          status: 'available',
          category_id: '',
          search: searchProduct,
          page,
          per_page: 10,
        }),
      );
    }
  }, [dispatch, page]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(
        getDataProduct({
          status: 'available',
          category_id: '',
          search: searchProduct,
          page,
          per_page: 10,
        }),
      );
    }, 3000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchProduct]);

  const footerHome = () => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: SIZES.padding4 }}>
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

  function Empty() {
    return (
      <View style={{
        alignItems: 'center', justifyContent: 'center', marginTop: SIZES.padding4,
      }}
      >
        <SelectionImage width={SIZES.width * 0.6} height={SIZES.width * 0.4} />
        <Text style={{
          color: COLORS.neutral3, textAlign: 'center', ...FONTS.bodyLargeRegular, marginTop: SIZES.padding3,
        }}
        >
          {t('emptyProduct')}
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={{
      backgroundColor: COLORS.neutral1,
    }}
    >
      <View style={{ flexDirection: 'row', marginTop: SIZES.padding5, marginBottom: SIZES.padding2 }}>
        <View style={{ justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={handleGoBack}
            style={{
              left: SIZES.padding2, right: SIZES.padding2, backgroundColor: COLORS.neutral1, borderRadius: 100,
            }}
          >
            <Icon name="arrow-left" color={COLORS.primaryPurple4} size={SIZES.icon} />
          </TouchableOpacity>
        </View>
        <View style={{
          elevation: 4,
          marginHorizontal: SIZES.padding5,
          backgroundColor: COLORS.neutral1,
          flexDirection: 'row',
          paddingHorizontal: SIZES.padding5,
          alignItems: 'center',
          borderRadius: SIZES.radius2,
        }}
        >
          <TextInput
            style={[FONTS.bodyNormalRegular, {
              width: '90%',
              alignItems: 'baseline',
            }]}
            onChangeText={setSearchProduct}
            value={searchProduct}
            placeholder={t('searchBarPlaceholder')}
          />
          <Icon name="search" color={COLORS.neutral3} size={SIZES.icon} style={{ position: 'absolute', right: SIZES.padding5 }} />
        </View>
      </View>
      <Separator />
      <View style={{ marginHorizontal: SIZES.padding5, marginTop: SIZES.padding4 }}>
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
              marginBottom: SIZES.padding5,
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
            ListEmptyComponent={Empty}
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
  );
}

export default Search;
