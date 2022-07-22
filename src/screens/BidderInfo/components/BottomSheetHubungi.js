import {
  ScrollView, Text, View, Image, Linking,
} from 'react-native';
import React from 'react';
import { t } from 'i18next';
import { CustomButton } from '../../../components';
import { COLORS, FONTS, SIZES } from '../../../constant';
import styles from '../../../constant/styles';
import formatRupiah from '../../../utils/formatCurrency';

export function BottomSheetHubungi(sellerDetailOrder) {
  const data = sellerDetailOrder;
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
          padding: SIZES.h2,
        }}
      >
        <Text style={{ color: COLORS.black, ...FONTS.bodyNormalMedium }}>
          {t('bottomSheetHubungiTitle')}
        </Text>
        <Text style={{ color: COLORS.neutral3, ...FONTS.bodyNormalMedium }}>
          {t('bottomSheetHubungiText')}
        </Text>

        <View
          style={[
            styles.card,
            { marginTop: SIZES.padding3, padding: SIZES.padding3 },
          ]}
        >
          <Text style={{ ...FONTS.bodyLargeMedium, textAlign: 'center' }}>
            {t('productMatch')}
          </Text>
          <View
            style={{
              paddingHorizontal: SIZES.padding5,
              paddingVertical: SIZES.padding3,
              flexDirection: 'row',
            }}
          >
            <View style={{ justifyContent: 'center' }}>
              <Image
                source={{
                  uri: 'https://picsum.photos/48',
                }}
                style={{ width: 48, height: 48, borderRadius: SIZES.padding1 }}
              />
            </View>
            <View style={{ paddingLeft: SIZES.padding3 }}>
              <Text style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}>
                {data?.User?.full_name}
              </Text>
              <Text
                style={{
                  ...FONTS.bodyNormalRegular,
                  color: COLORS.neutral3,
                }}
              >
                {data?.User?.city}
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: SIZES.padding5,
              paddingVertical: SIZES.base,
              flexDirection: 'row',
            }}
          >
            <View style={{ justifyContent: 'center' }}>
              <Image
                source={{
                  uri: data?.Product?.image_url,
                }}
                style={{ width: 48, height: 48, borderRadius: SIZES.padding1 }}
              />
            </View>
            <View style={{ paddingLeft: SIZES.padding3 }}>
              <Text style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}>
                {data?.Product?.name}
              </Text>
              <Text
                style={{
                  ...FONTS.bodyLargeMedium,
                  color: COLORS.black,
                  textDecorationLine: 'line-through',
                }}
              >
                {formatRupiah(data?.Product?.base_price)}
              </Text>
              <Text
                style={{
                  ...FONTS.bodyLargeRegular,
                  color: COLORS.black,
                }}
              >
                {t('bargained')}
                {' '}
                {formatRupiah(data?.price)}
              </Text>
            </View>
          </View>
        </View>
        <CustomButton
          onPress={() => {
            const link = `whatsapp://send?text=Halo ${data?.User?.full_name}, penawaranmu untuk ${data?.Product?.name} saya terima. Gimana proses selanjutnya? &phone=62${data?.User?.phone_number}`;
            Linking.canOpenURL(link)
              .then((supported) => {
                if (!supported) {
                  Linking.openURL(`http://wa.me/62${data?.User?.phone_number}?text=Halo ${data?.User?.full_name}, penawaranmu untuk ${data?.Product?.name} saya terima. Gimana proses selanjutnya?`);
                }
                return Linking.openURL(link);
              });
          }}
          buttonStyle={{ width: '100%' }}
          title={t('whatsappButton')}
          enabled
        />
      </View>
    </ScrollView>
  );
}
