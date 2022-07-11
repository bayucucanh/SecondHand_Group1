import {
  ScrollView, Text, View, Image,
} from 'react-native';
import React, {
  useEffect, useRef, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS, FONTS, SIZES } from '../../constant';
import {
  BidderCard,
  BottomSheetComponent,
  Header,
  Loading,
  PhotoProfile,
} from '../../components';
import styles from '../../constant/styles';
import { getDetailSellerOrder } from '../../redux/actions';
import { putStatusSellerOrder } from '../../redux/actions/putStatusOrder';
import { BottomSheetHubungi } from './components/BottomSheetHubungi';
import { BottomSheetStatus } from './components/BottomSheetStatus';

function BidderInfo({ navigation, route }) {
  const { orderId } = route.params;
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const accessToken = useSelector((state) => state.login.userData.access_token);
  const sellerDetailOrder = useSelector(
    (state) => state.sellerOrder.sellerDetailOrder,
  );
  const loading = useSelector((state) => state.global.isLoading);

  const [values, setValues] = useState('first');
  const [status, setStatus] = useState(false);

  useEffect(() => {
    dispatch(getDetailSellerOrder(orderId, accessToken));
    console.log('order id', orderId);
  }, []);

  const sheetRef = useRef(null);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  function handlePutStatus(value) {
    const dataStatus = {
      status: value,
    };
    dispatch(putStatusSellerOrder(accessToken, orderId, dataStatus));
    if (value === 'accepted') {
      handleSnapPress(2);
    }
  }

  const onPressAfterPutStatus = (params) => {
    if (params === 'hubungi') {
      setStatus(false);
      handleSnapPress(2);
    } else {
      setStatus(true);
      handleSnapPress(2);
    }
  };

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
              date={sellerDetailOrder.transaction_date}
              price={sellerDetailOrder.Product.base_price}
              status={sellerDetailOrder.status}
              offeringPrice={sellerDetailOrder.price}
              isSeen={false}
              onPressAccepted={
                sellerDetailOrder.status === 'accepted'
                  ? () => onPressAfterPutStatus('hubungi')
                  : () => handlePutStatus('accepted')
              }
              onPressDeclined={
                sellerDetailOrder.status === 'accepted'
                  ? () => onPressAfterPutStatus('status')
                  : () => handlePutStatus('declined')
              }
            />
          </View>
        </View>
      </ScrollView>

      <BottomSheetComponent
        sheetRef={sheetRef}
        component={status ? BottomSheetStatus(values, setValues) : BottomSheetHubungi(sellerDetailOrder)}
      />
    </>
  );
}

export default BidderInfo;
