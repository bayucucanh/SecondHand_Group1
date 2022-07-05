import {
  ScrollView, StyleSheet, Text, View,
} from 'react-native';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS, FONTS, SIZES } from '../../constant';
import {
  BidderCard, Header, NotificationCard, PhotoProfile,
} from '../../components';
import styles from '../../constant/styles';
import { getDetailSellerOrder } from '../../redux/actions';

function BidderInfo({ navigation, route }) {
  const { orderId } = route.params;
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const accessToken = useSelector((state) => state.login.userData.access_token);
  const sellerDetailOrder = useSelector((state) => state.sellerOrder.sellerDetailOrder);

  useEffect(() => {
    dispatch(getDetailSellerOrder(orderId, accessToken));
    console.log('order id', orderId);
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: COLORS.neutral1 }}
    >
      <View style={{
        flex: 1, backgroundColor: COLORS.neutral1, paddingBottom: SIZES.padding6, paddingTop: 20,
      }}
      >
        <Header title="Info Penawar" />
        <View style={{ marginHorizontal: SIZES.padding5 }}>
          <View style={[styles.card, {
            marginTop: SIZES.padding3,
            paddingHorizontal: SIZES.padding3,
            borderRadius: SIZES.radius2,
            paddingVertical: SIZES.padding3,
            flexDirection: 'row',
          }]}
          >
            <View style={{ justifyContent: 'center' }}>
              <PhotoProfile image={{ uri: 'https://picsum.photos/48' }} style={{ width: 48, height: 48 }} styleImage={{ width: 48, height: 48 }} />
            </View>
            <View style={{ paddingLeft: SIZES.padding3 }}>
              <Text style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}>
                {sellerDetailOrder?.User.full_name}
              </Text>
              <Text style={{ ...FONTS.bodyNormalRegular, color: COLORS.neutral3 }}>{sellerDetailOrder?.User.city}</Text>
            </View>
          </View>
          <Text style={[FONTS.bodyLargeMedium, {
            color: COLORS.neutral5,
            marginTop: SIZES.padding5,
          }]}
          >
            Daftar Produkmu yang Ditawar
          </Text>
          <BidderCard
            image="https://picsum.photos/48"
            name={sellerDetailOrder?.Product.name}
            date="20 Apr, 14:04"
            price={sellerDetailOrder?.Product.base_price}
            status={sellerDetailOrder?.status}
            offeringPrice={sellerDetailOrder?.price}
            isSeen={false}
          />
          {/* <BidderCard
            image="https://picsum.photos/48"
            name="Jam Tangan Casio"
            date="20 Apr, 14:04"
            price="Rp. 250.000"
            status="bid"
            offeringPrice="Rp. 200.000"
            isSeen={false}
          />
          <BidderCard
            image="https://picsum.photos/48"
            name="Jam Tangan Casio"
            date="20 Apr, 14:04"
            price="Rp. 250.000"
            status="bid"
            offeringPrice="Rp. 200.000"
            isSeen={false}
          /> */}
        </View>
      </View>
    </ScrollView>
  );
}

export default BidderInfo;

// const styles = StyleSheet.create({});
