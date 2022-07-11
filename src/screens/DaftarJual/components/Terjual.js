import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Loading, NotificationCard } from '../../../components';
import { DiminatiNull } from '../../../assets/image';
import { COLORS, FONTS, SIZES } from '../../../constant';
import { SelectionImage } from '../../../assets';

function Terjual() {
  const { t } = useTranslation();
  const productList = useSelector((state) => state.sellerProduct.sellerProductList);
  const isLoading = useSelector((state) => state.global.isLoading);
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
      {isLoading ? (<Loading size="large" color={COLORS.primaryPurple4} />) : (
        <View style={{
          flex: 1,
          height: SIZES.height * 0.5,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          {productList ? <Empty />
            : productList.map((item) => (
              item.status == 'sold' && (
              <NotificationCard
                key={item.id}
                image={item.image_url}
                name={item.name}
                date="20 Apr, 14:04"
                price={item.base_price}
                status="bid"
                isSeen={false}
              />
              )))}
        </View>
      )}

    </View>
  );
}

export default Terjual;

const styles = StyleSheet.create({});
