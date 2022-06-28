import {
  StyleSheet, Text, View, ScrollView, Image, Button,
} from 'react-native';
import React, {
  useEffect, useState, useRef, useMemo, useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import {
  COLORS, SIZES, FONTS, style,
} from '../../constant';
import {
  GoBackIcon,
  PhotoProfile,
  CustomButton,
  InputText,
} from '../../components';
import styles from '../../constant/styles';

function Detail({ route }) {
  const { productId } = route.params;
  const profileData = useSelector((state) => state.profile.profileData);
  const { t, i18n } = useTranslation();

  // ref
  const sheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['1%', '10%', '64%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  const handleClosePress = () => sheetRef.current.close();

  useEffect(() => {
    console.log('Product Id', productId);
  }, [productId]);

  // renders
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        pressBehavior="close"
        disappearsOnIndex={1}
        appearsOnIndex={2}
      />
    ),
    [],
  );

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
      <BottomSheet
        index={0}
        ref={sheetRef}
        snapPoints={snapPoints}
        enableHandlePanningGesture
        enableContentPanningGesture
        enableOverDrag
        animateOnMount
        backdropComponent={renderBackdrop}
        onChange={handleSheetChanges}
      >
        <View
          style={{ flex: 1, backgroundColor: COLORS.white, padding: SIZES.h2 }}
        >
          <Text style={{ color: COLORS.black, ...FONTS.bodyNormalMedium }}>
            Masukan Harga Tawarmu
          </Text>
          <Text style={{ color: COLORS.neutral3, ...FONTS.bodyNormalMedium }}>
            Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu akan
            segera dihubungi penjual.
          </Text>
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
                source={{ uri: 'https://merekbagus.com/wp-content/uploads/2020/10/Merk-tas-lokal-Doris-Dorothea.jpg' }}
                style={{ width: 48, height: 48 }}
                styleImage={{ width: 48, height: 48 }}
              />
            </View>
            <View style={{ paddingLeft: SIZES.padding3 }}>
              <Text style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}>
                Nama Barang
              </Text>
              <Text
                style={{ ...FONTS.bodyNormalRegular, color: COLORS.neutral3 }}
              >
                Rp. Harga
              </Text>
            </View>
          </View>
          <View style={{ marginVertical: SIZES.h2 }}>
            <Text style={{ ...FONTS.bodyNormalBold }}>Harga Tawar</Text>
            <InputText
              placeholder={t('pricePlaceholder')}
              name="name"
              style={{ marginTop: 4 }}
              // onChangeText={handleChange('name')}
              // onBlur={handleBlur('name')}
              // error={touched.name && errors.name}
              // value={values.name}
            />
          </View>
          <CustomButton
            buttonStyle={{ width: '100%' }}
            title="Kirim"
            enabled
            onPress={() => console.log('Data dikirim')}
          />
        </View>
      </BottomSheet>
    </>
  );
}

export default Detail;
