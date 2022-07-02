import {
  StyleSheet,
  Text,
  View,
  FlatList,
  VirtualizedList,
  SafeAreaView,
  LogBox,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDataSellerOrder} from '../../../redux/actions';
import {FONTS, SIZES, COLORS} from '../../../constant';
import {Loading, NotificationCard} from '../../../components';

function Diminati() {
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.login.userData.access_token);
  const sellerOrderData = useSelector(state => state.sellerOrder.sellerOrder);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    dispatch(getDataSellerOrder(accessToken));
    console.log('Seller Order', sellerOrderData);
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={sellerOrderData}
        showsVerticalScrollIndicator={false}
        refreshing={Loading}
        keyExtractor={(item, index) => item.id + index.toString()}
        renderItem={({item}) => (
          <NotificationCard
            image={item.Product.image_url}
            name={item.Product.name}
            date="20 Apr, 14:04"
            price={item.price}
            status={item.status}
            isSeen={false}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default Diminati;

const styles = StyleSheet.create({});
