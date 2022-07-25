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
  BottomSheetComponent,
  IconButton,
  Loading,
  NotificationCard,
  Empty,
} from '../../../components';
import { DiminatiNull } from '../../../assets/image';
import { SelectionImage } from '../../../assets';
import { BottomSheetSorting } from './BottomSheetSorting';
import { bubbleSortAsc, bubbleSortDesc } from '../../../utils';

function Diminati({ handleSnapPress, sort, setSort }) {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.login.userData.access_token);
  const sellerOrderData = useSelector((state) => state.sellerOrder.sellerOrder
    .sort((a, b) => a.transaction_date < b.transaction_date)
    .filter((item) => item.status !== 'declined'));
  const isLoading = useSelector((state) => state.global.isLoading);
  const [diminatiData, setDiminatiData] = useState([...sellerOrderData]);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    if (isFocused) {
      dispatch(getDataSellerOrder(accessToken));
      setDiminatiData(
        sellerOrderData
          .sort((a, b) => a.transaction_date < b.transaction_date)
          .filter((item) => item.status !== 'declined'),
      );
    }
  }, [isFocused]);

  useEffect(() => {
    if (sort === 'newest') {
      bubbleSortDesc(diminatiData, 'transaction_date');
    }
    if (sort === 'oldest') {
      bubbleSortAsc(diminatiData, 'transaction_date');
    }
    if (sort === 'expensive') {
      bubbleSortDesc(diminatiData, 'price');
    }
    if (sort === 'cheapest') {
      bubbleSortAsc(diminatiData, 'price');
    }
    setDiminatiData([...diminatiData]);
  }, [sort]);

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
        <TouchableOpacity
          onPress={() => {
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
      {isLoading ? (
        <Loading size="large" color={COLORS.primaryPurple4} />
      ) : sellerOrderData.length == 0 ? (
        <View
          style={{
            flex: 1,
            height: SIZES.height * 0.5,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Empty title={t('emptyInterested')} />
        </View>
      ) : (
        <FlatList
          data={diminatiData}
          showsVerticalScrollIndicator={false}
          refreshing={Loading}
          keyExtractor={(item, index) => item.id + index.toString()}
          ListEmptyComponent={<Empty title={t('emptyInterested')} />}
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
