/* eslint-disable no-nested-ternary */
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { Loading, NotificationCard, ProductCard } from '../../../components';
import { DiminatiNull } from '../../../assets/image';
import { COLORS, FONTS, SIZES } from '../../../constant';
import { SelectionImage } from '../../../assets';
import { getDataSellerProduct } from '../../../redux/actions/getSellerProduct';

function Terjual() {
  const { t } = useTranslation();
  const productList = useSelector((state) => state.sellerProduct.sellerProductList.filter((item) => item.status === 'seller'));
  const isLoading = useSelector((state) => state.global.isLoading);
  const accessToken = useSelector((state) => state.login.userData.access_token);
  const isFocused = useIsFocused();

  const dispatch = useDispatch();
  useEffect(() => {
    if (isFocused) {
      dispatch(getDataSellerProduct(accessToken));
    }
  }, [isFocused]);

  function Empty() {
    return (
      <View style={{
        alignItems: 'center', justifyContent: 'center',
      }}
      >
        <SelectionImage width={SIZES.width * 0.6} height={SIZES.width * 0.4} />
        <Text style={{
          color: COLORS.neutral3, textAlign: 'center', ...FONTS.bodyLargeRegular, marginTop: SIZES.padding3,
        }}
        >
          {t('emptySold')}
        </Text>
      </View>
    );
  }

  return (
    <View>
      {isLoading ? (<Loading size="large" color={COLORS.primaryPurple4} />)
        : productList.length > 0 ? productList.map((item) => item.status == 'seller' && (
          <View key={item.id} style={{ marginBottom: SIZES.padding3 }}>
            <ProductCard
              name={item.name}
              categories={item.Categories}
              basePrice={item.base_price}
              imageUrl={item.image_url}
              style={{ maxWidth: SIZES.width * 0.4 }}
              productDisable
            />
          </View>
        ))
          : (
            <View style={{
              flex: 1,
              height: SIZES.height * 0.5,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            >
              <Empty />
            </View>
          )}

    </View>
  );
}

export default Terjual;

const styles = StyleSheet.create({});
