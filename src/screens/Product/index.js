import {
  StyleSheet, Text, View, ScrollView, Image,
} from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { COLORS, FONTS, SIZES } from '../../constant';
import { CustomButton, GoBackIcon, PhotoProfile } from '../../components';
import styles from '../../constant/styles';

function Product({ route }) {
  const { t, i18n } = useTranslation();

  const { values } = route.params;
  const profileData = useSelector((state) => state.profile.profileData);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: COLORS.neutral1 }}
      >
        <View style={{
          flex: 1, marginBottom: SIZES.padding5,
        }}
        >
          <Image
            source={{ uri: 'https://picsum.photos/360/300' }}
            style={{ height: 300 }}
          />
          <GoBackIcon iconColor={COLORS.neutral5} size={28} style={{ top: 28 }} />
          <View style={{ marginHorizontal: SIZES.padding5 }}>
            <View style={[styles.card, { marginTop: -40, paddingHorizontal: SIZES.padding5, paddingVertical: SIZES.padding3 }]}>
              <Text style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}>{values.name}</Text>
              <Text style={{ ...FONTS.bodyNormalRegular, color: COLORS.neutral3 }}>{values.category_ids}</Text>
              <Text style={{ ...FONTS.bodyLargeRegular, fontSize: 18, color: COLORS.neutral5 }}>{values.base_price}</Text>
            </View>
            <View style={[styles.card, {
              marginTop: SIZES.padding3, paddingHorizontal: SIZES.padding5, paddingVertical: SIZES.padding3, flexDirection: 'row',
            }]}
            >
              <View style={{ justifyContent: 'center' }}>
                <PhotoProfile image={{ uri: profileData.image_url }} style={{ width: 48, height: 48 }} styleImage={{ width: 48, height: 48 }} />
              </View>
              <View style={{ paddingLeft: SIZES.padding3 }}>
                <Text style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}>
                  {profileData.full_name}
                </Text>
                <Text style={{ ...FONTS.bodyNormalRegular, color: COLORS.neutral3 }}>{profileData.city}</Text>
              </View>
            </View>
            <View style={[styles.card, {
              marginTop: SIZES.padding3, paddingHorizontal: SIZES.padding5, paddingVertical: SIZES.padding3,
            }]}
            >
              <Text style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}>{t('descriptionTitle')}</Text>
              <Text style={{
                ...FONTS.bodyLargeRegular, paddingTop: SIZES.padding3, color: COLORS.neutral3,
              }}
              >
                {values.description}
              </Text>
            </View>
          </View>
        </View>

      </ScrollView>
      <View style={{
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
          title="Terbitkan"
          enabled
        />
      </View>
    </>
  );
}

export default Product;
