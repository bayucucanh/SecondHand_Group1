import {
  ScrollView, Text, View, Image,
} from 'react-native';
import React, { useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS, FONTS, SIZES } from '../../constant';
import {
  BidderCard,
  BottomSheetComponent,
  CustomButton,
  Header,
  Loading,
  NotificationCard,
  PhotoProfile,
} from '../../components';
import styles from '../../constant/styles';
import { getDetailSellerOrder } from '../../redux/actions';
import { putStatusSellerOrder } from '../../redux/actions/putStatusOrder';
import formatRupiah from '../../utils/formatCurrency';

function BidderInfo({ navigation, route }) {
  const { orderId } = route.params;
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const accessToken = useSelector((state) => state.login.userData.access_token);
  const sellerDetailOrder = useSelector(
    (state) => state.sellerOrder.sellerDetailOrder,
  );
  const loading = useSelector((state) => state.global.isLoading);

  useEffect(() => {
    dispatch(getDetailSellerOrder(orderId, accessToken));
    console.log('order id', orderId);
  }, []);

  const sheetRef = useRef(null);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  function BottomSheetComp(params) {
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
            Yeay kamu berhasil mendapat harga yang sesuai
          </Text>
          <Text style={{ color: COLORS.neutral3, ...FONTS.bodyNormalMedium }}>
            Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya
          </Text>

          <View style={[styles.card, { marginTop: SIZES.padding3, padding: SIZES.padding3 }]}>
            <Text style={{ ...FONTS.bodyNormalBold, textAlign: 'center' }}>
              Product Match
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
                <Text
                  style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}
                >
                  {sellerDetailOrder.User.full_name}
                </Text>
                <Text
                  style={{
                    ...FONTS.bodyNormalRegular,
                    color: COLORS.neutral3,
                  }}
                >
                  {sellerDetailOrder.User.city}
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
                    uri: sellerDetailOrder.Product.image_url,
                  }}
                  style={{ width: 48, height: 48, borderRadius: SIZES.padding1 }}
                />
              </View>
              <View style={{ paddingLeft: SIZES.padding3 }}>
                <Text
                  style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}
                >
                  {sellerDetailOrder.Product.name}
                </Text>
                <Text
                  style={{
                    ...FONTS.bodyLargeMedium,
                    color: COLORS.black,
                    textDecorationLine: 'line-through',
                  }}
                >
                  {formatRupiah(sellerDetailOrder.Product.base_price)}
                </Text>
                <Text
                  style={{
                    ...FONTS.bodyLargeRegular,
                    color: COLORS.black,
                  }}
                >
                  Ditawar
                  {' '}
                  {formatRupiah(sellerDetailOrder.price)}
                </Text>
              </View>
            </View>
          </View>
          <CustomButton
            // onPress={handleSubmit}
            buttonStyle={{ width: '100%' }}
            title="Hubungi Via Whatsapp"
            enabled
          />
        </View>
      </ScrollView>
    );
  }

  function handlePutStatus(value) {
    const dataStatus = {
      status: value,
    };
    // dispatch(putStatusSellerOrder(accessToken, orderId, dataStatus));
    if (value === 'accepted') {
      handleSnapPress(2);
    }
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: COLORS.neutral1 }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.neutral1,
            paddingBottom: SIZES.padding6,
            paddingTop: 20,
          }}
        >
          <Header title="Info Penawar" />
          <View style={{ marginHorizontal: SIZES.padding5 }}>
            <View
              style={[
                styles.card,
                {
                  marginTop: SIZES.padding3,
                  paddingHorizontal: SIZES.padding3,
                  borderRadius: SIZES.radius2,
                  paddingVertical: SIZES.padding3,
                  flexDirection: 'row',
                },
              ]}
            >
              <View style={{ justifyContent: 'center' }}>
                <PhotoProfile
                  image={{ uri: 'https://picsum.photos/48' }}
                  style={{ width: 48, height: 48 }}
                  styleImage={{ width: 48, height: 48 }}
                />
              </View>
              <View style={{ paddingLeft: SIZES.padding3 }}>
                <Text
                  style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}
                >
                  {sellerDetailOrder.User.full_name}
                </Text>
                <Text
                  style={{ ...FONTS.bodyNormalRegular, color: COLORS.neutral3 }}
                >
                  {sellerDetailOrder.User.city}
                </Text>
              </View>
            </View>
            <Text
              style={[
                FONTS.bodyLargeMedium,
                {
                  color: COLORS.neutral5,
                  marginTop: SIZES.padding5,
                },
              ]}
            >
              Daftar Produkmu yang Ditawar
            </Text>
            <BidderCard
              image={sellerDetailOrder.Product.image_url}
              name={sellerDetailOrder.Product.name}
              date="20 Apr, 14:04"
              price={sellerDetailOrder.Product.base_price}
              status={sellerDetailOrder.status}
              offeringPrice={sellerDetailOrder.price}
              isSeen={false}
              onPressAccepted={
                  sellerDetailOrder.status === 'accepted'
                    ? () => console.log('Hubungi')
                    : () => handlePutStatus('accepted')
                }
              onPressDeclined={
                  sellerDetailOrder.status === 'accepted'
                    ? () => console.log('Status')
                    : () => handlePutStatus('declined')
                }
            />
          </View>
        </View>
      </ScrollView>
      <BottomSheetComponent sheetRef={sheetRef} component={BottomSheetComp} />
    </>
  );
}

export default BidderInfo;
