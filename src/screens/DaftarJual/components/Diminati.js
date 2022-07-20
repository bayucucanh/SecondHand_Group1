/* eslint-disable no-nested-ternary */
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  LogBox,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {
  useEffect, useState, useRef, useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { getDataSellerOrder } from '../../../redux/actions';
import { SIZES, COLORS, FONTS } from '../../../constant';
import {
  BottomSheetComponent, IconButton, Loading, NotificationCard,
} from '../../../components';
import { DiminatiNull } from '../../../assets/image';
import { SelectionImage } from '../../../assets';
import { BottomSheetSorting } from './BottomSheetSorting';

function Diminati({ handleSnapPress, sort, setSort }) {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.login.userData.access_token);
  const sellerOrderData = useSelector((state) => state.sellerOrder.sellerOrder);
  const isLoading = useSelector((state) => state.global.isLoading);
  const [diminatiData, setDiminatiData] = useState([...sellerOrderData]);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    if (isFocused) {
      dispatch(getDataSellerOrder(accessToken));
      setDiminatiData(sellerOrderData);
    }
  }, [isFocused]);

  useEffect(() => {
    if (sort === 'newest') { diminatiData.sort((a, b) => a.transaction_date < b.transaction_date); }
    if (sort === 'oldest') { diminatiData.sort((a, b) => a.transaction_date > b.transaction_date); }
    if (sort === 'expensive') { diminatiData.sort((a, b) => a.price < b.price); }
    if (sort === 'cheapest') { diminatiData.sort((a, b) => a.price > b.price); }
    setDiminatiData([...diminatiData]);
  }, [sort]);

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

  function Sort() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ ...FONTS.bodyNormalRegular, color: COLORS.neutral5 }}>
          {t('sortBy')}
          <Text style={{ ...FONTS.bodyNormalBold, color: COLORS.neutral5 }}>
            {' '}
            {t(sort)}
          </Text>
        </Text>
        <TouchableOpacity onPress={() => {
          handleSnapPress(2);
        }}
        >
          <Icon name="sliders" color={COLORS.neutral4} size={20} />
        </TouchableOpacity>
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
            data={diminatiData}
            showsVerticalScrollIndicator={false}
            refreshing={Loading}
            keyExtractor={(item, index) => item.id + index.toString()}
            ListEmptyComponent={Empty}
            ListHeaderComponent={Sort}
            renderItem={({ item }) => (
              <NotificationCard
                image={item.Product.image_url}
                name={item.Product.name}
                date={item.transaction_date}
                price={item.base_price}
                status={item.status}
                offeringPrice={item.price}
                isSeen
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
