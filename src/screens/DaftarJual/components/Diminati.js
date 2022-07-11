/* eslint-disable no-nested-ternary */
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  LogBox,
  Image,
} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { getDataSellerOrder } from '../../../redux/actions';
import { SIZES, COLORS, FONTS } from '../../../constant';
import { Loading, NotificationCard } from '../../../components';
import { DiminatiNull } from '../../../assets/image';
import { SelectionImage } from '../../../assets';

function Diminati() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.login.userData.access_token);
  const sellerOrderData = useSelector((state) => state.sellerOrder.sellerOrder);
  const isLoading = useSelector((state) => state.global.isLoading);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    if (isFocused) {
      dispatch(getDataSellerOrder(accessToken));
    }
  }, [isFocused]);

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
          {t('emptyInterested')}
        </Text>
      </View>
    );
  }

  return (
    <View>
      {isLoading ? (<Loading size="large" color={COLORS.primaryPurple4} />)
        : sellerOrderData.length == 0 ? (
          <View style={{
            flex: 1,
            height: SIZES.height * 0.5,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            <Empty />
          </View>
        ) : (
          <FlatList
            data={sellerOrderData}
            showsVerticalScrollIndicator={false}
            refreshing={Loading}
            keyExtractor={(item, index) => item.id + index.toString()}
            ListEmptyComponent={empty}
            renderItem={({ item }) => (
              <NotificationCard
                image={item.Product.image_url}
                name={item.Product.name}
                date={item.transaction_date}
                price={item.base_price}
                status={item.status}
                offeringPrice={item.price}
                onPress={() => navigation.navigate('BidderInfo', { orderId: item.id })}
              />
            )}
          />
        )}
    </View>
  );
}

export default Diminati;

const styles = StyleSheet.create({});
