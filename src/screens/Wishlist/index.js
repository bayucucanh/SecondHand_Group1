import {
  StyleSheet, Text, View, Dimensions, ScrollView, Switch, FlatList,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import {
  Header, LoadingScreen, ProductCard, Separator, TextButton,
} from '../../components';
import {
  COLORS, FONTS, SIZES,
} from '../../constant';
import FocusAwareStatusBar from '../../utils/focusAwareStatusBar';
import { SelectionImage } from '../../assets';
import { getWishlistData } from '../../redux/actions/getWishlist';
import { postWishlistData } from '../../redux/actions/pushWishlist';
import { deleteWishlistData } from '../../redux/actions/deleteWishlist';

function Wishlist() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const accessToken = useSelector((state) => state.login.userData.access_token);
  const isLoading = useSelector((state) => state.global.isLoading);
  const wishlistData = useSelector((state) => state.wishlist.wishlistData);
  const [enable, setEnable] = useState(false);

  const dispatch = useDispatch();

  const checkEnable = (wishlistId) => {
    dispatch(deleteWishlistData(accessToken, wishlistId));
    dispatch(getWishlistData(accessToken));
  };

  useEffect(() => {
    dispatch(getWishlistData(accessToken));
  }, []);

  function Empty() {
    return (
      <View style={{
        height: SIZES.height * 0.8,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <SelectionImage width={SIZES.width * 0.6} height={SIZES.width * 0.4} />
        <Text style={{
          color: COLORS.neutral3,
          textAlign: 'center',
          ...FONTS.bodyLargeRegular,
          marginTop: SIZES.padding3,
          marginHorizontal: SIZES.padding6,
        }}
        >
          {t('emptyWishlist')}
        </Text>
      </View>
    );
  }

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: COLORS.neutral1 }}
      >
        <View style={{
          flex: 1, paddingTop: 20, marginBottom: SIZES.padding6,
        }}
        >
          <FocusAwareStatusBar barStyle="dark-content" color="white" />
          <Header title={t('wishlistTitle')} />
          <View style={{ marginHorizontal: SIZES.padding5 }}>
            <FlatList
              data={wishlistData}
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
              ListEmptyComponent={Empty}
              renderItem={({ item }) => (
                <ProductCard
                  name={item.Product.name}
                  basePrice={item.Product.base_price}
                  imageUrl={item.Product.image_url}
                  style={{ maxWidth: SIZES.width * 0.42 }}
                  icon
                  enable={enable}
                  checkEnable={() => checkEnable(item.id)}
                  onPress={() => navigation.navigate('Detail', { productId: item.Product.id })}
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
      {isLoading && (
        <LoadingScreen />
      )}
    </>
  );
}

export default Wishlist;
