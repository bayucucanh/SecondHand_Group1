import {
  ScrollView, Text, View, Image,
} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getBidDetailProduct } from '../../redux/actions/getAllBidProduct';
import { FONTS, SIZES, COLORS } from '../../constant';
import styles from '../../constant/styles';
import {
  CustomButton, GoBackIcon, LoadingScreen, PhotoProfile,
} from '../../components';

function DetailBuyerOrder({ route }) {
  const { orderId } = route.params;
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const accessToken = useSelector((state) => state.login.userData.access_token);
  const detailData = useSelector((state) => state.allBid.detailBidProduct);
  const loading = useSelector((state) => state.global.isLoading);

  useEffect(() => {
    dispatch(getBidDetailProduct(orderId, accessToken));
  }, [dispatch]);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: COLORS.neutral1 }}
      >
        <View style={{ flex: 1, marginBottom: SIZES.padding5 }}>
          <Image
            source={{ uri: detailData.Product.image_url }}
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
                {detailData.Product.name}
              </Text>
              <Text
                style={{
                  ...FONTS.bodyLargeRegular,
                  fontSize: 18,
                  color: COLORS.neutral5,
                }}
              >
                {detailData.Product.base_price}
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
                  image={{ uri: detailData.Product.User.image_url }}
                  style={{ width: 48, height: 48 }}
                  styleImage={{ width: 48, height: 48 }}
                />
              </View>
              <View style={{ paddingLeft: SIZES.padding3 }}>
                <Text style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}>
                  {detailData.Product.User.full_name}
                </Text>
                <Text
                  style={{ ...FONTS.bodyNormalRegular, color: COLORS.neutral3 }}
                >
                  {detailData.Product.User.city}
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
                {detailData.Product.description}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 24,
            }}
          >
            <View
              style={{
                flex: 1,
                marginRight: SIZES.base,
                borderColor: COLORS.primaryPurple4,
                borderWidth: 2,
                borderRadius: SIZES.radius2,
              }}
            >
              <CustomButton
              // onPress={() => navigation.navigate('JualFull', { data: values })}
                title={t('edit')}
                type
                enabled
              />
            </View>
            <View style={{ flex: 1, marginLeft: 8 }}>
              <CustomButton
              // onPress={() => dispatch(deleteDataProduct(accessToken, values.id))}
              // onPress={() => setModalVisible(true)}
                title={t('delete')}
                enabled
              />
            </View>
          </View>
        </View>
      </ScrollView>
      {loading && (
      <LoadingScreen />
      )}
    </>
  );
}

export default DetailBuyerOrder;
