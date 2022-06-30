import {
  StyleSheet, Text, View, ScrollView, Image, Button,
} from 'react-native';
import React, {
  useEffect, useState, useRef, useMemo, useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  COLORS, SIZES, FONTS, style,
} from '../../constant';
import {
  GoBackIcon,
  PhotoProfile,
  CustomButton,
  InputText,
  BottomSheetComponent,
} from '../../components';
import styles from '../../constant/styles';

function Detail({ route }) {
  const { productId } = route.params;
  const profileData = useSelector((state) => state.profile.profileData);
  const { t, i18n } = useTranslation();

  // ref
  const sheetRef = useRef(null);

  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  useEffect(() => {
    console.log('Product Id', productId);
  }, [productId]);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: COLORS.neutral1 }}
      >
        <View style={{ flex: 1, marginBottom: SIZES.padding5 }}>
          <Image
            source={{ uri: 'https://images.tokopedia.net/img/cache/1200/BgtCLw/2022/6/10/391dd7fd-2aef-426f-9e76-448bccab0e4a.jpg?ect=4g' }}
            style={{ height: 300 }}
          />
          <GoBackIcon iconColor={COLORS.neutral5} size={28} style={{ top: 28 }} />
          <View style={{ marginHorizontal: SIZES.padding5 }}>
            <View
              style={[
                styles.card,
                {
                  marginTop: -40,
                  paddingHorizontal: SIZES.padding5,
                  paddingVertical: SIZES.padding3,
                },
              ]}
            >
              <Text style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}>
                Nama barang
              </Text>
              <Text
                style={{ ...FONTS.bodyNormalRegular, color: COLORS.neutral3 }}
              >
                Kategori
              </Text>
              <Text
                style={{
                  ...FONTS.bodyLargeRegular,
                  fontSize: 18,
                  color: COLORS.neutral5,
                }}
              >
                Rp. Harga
              </Text>
            </View>
            <View
              style={[
                styles.card,
                {
                  marginTop: SIZES.padding3,
                  paddingHorizontal: SIZES.padding5,
                  paddingVertical: SIZES.padding3,
                  flexDirection: 'row',
                },
              ]}
            >
              <View style={{ justifyContent: 'center' }}>
                <PhotoProfile
                  image={{ uri: profileData.image_url }}
                  style={{ width: 48, height: 48 }}
                  styleImage={{ width: 48, height: 48 }}
                />
              </View>
              <View style={{ paddingLeft: SIZES.padding3 }}>
                <Text
                  style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}
                >
                  {profileData.full_name}
                </Text>
                <Text
                  style={{ ...FONTS.bodyNormalRegular, color: COLORS.neutral3 }}
                >
                  {profileData.city}
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.card,
                {
                  marginTop: SIZES.padding3,
                  paddingHorizontal: SIZES.padding5,
                  paddingVertical: SIZES.padding3,
                },
              ]}
            >
              <Text style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}>
                {t('descriptionTitle')}
              </Text>
              <Text
                style={{
                  ...FONTS.bodyLargeRegular,
                  paddingTop: SIZES.padding3,
                  color: COLORS.neutral3,
                }}
              >
                Deskripsi Barang
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 23,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 24,
        }}
      >
        <CustomButton
          buttonStyle={{ width: '100%' }}
          title="Saya Tertarik dan Ingin Nego Produk"
          enabled
          onPress={() => handleSnapPress(2)}
        />
      </View>
      <BottomSheetComponent
        sheetRef={sheetRef}
        handleSnapPress={handleSnapPress}
        productName="Sweater"
        price="Rp. 900.0000"
        title="Harga Tawar"
        placeholder={t('pricePlaceholder')}
      />
    </>
  );
}

export default Detail;
