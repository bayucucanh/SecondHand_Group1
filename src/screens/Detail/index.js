import {
  StyleSheet, Text, View, ScrollView, Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  COLORS, SIZES, FONTS, style,
} from '../../constant';
import { GoBackIcon, PhotoProfile } from '../../components';
import styles from '../../constant/styles';

function Detail({ route }) {
  const { productId } = route.params;

  useEffect(() => {
    console.log('Product Id', productId);
  }, [productId]);

  const profileData = useSelector((state) => state.profile.profileData);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: COLORS.neutral1 }}
    >
      <View style={{ flex: 1, marginBottom: SIZES.padding5 }}>
        <Image
          source={{ uri: 'https://picsum.photos/360/300' }}
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
            <Text style={{ ...FONTS.bodyNormalRegular, color: COLORS.neutral3 }}>
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
              <Text style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}>
                Nama Penjual
              </Text>
              <Text
                style={{ ...FONTS.bodyNormalRegular, color: COLORS.neutral3 }}
              >
                Kota Penjual
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
              Deskripsi Title
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
  );
}

export default Detail;
