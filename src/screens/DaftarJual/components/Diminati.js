import {
  StyleSheet,
  Text,
  View,
  FlatList,
  VirtualizedList,
  SafeAreaView,
  LogBox,
  Image,
} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { getDataSellerOrder } from '../../../redux/actions';
import { FONTS, SIZES, COLORS } from '../../../constant';
import { Loading, NotificationCard } from '../../../components';
import { DiminatiNull } from '../../../assets/image';

function Diminati() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.login.userData.access_token);
  const sellerOrderData = useSelector((state) => state.sellerOrder.sellerOrder);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    dispatch(getDataSellerOrder(accessToken));
    console.log('Seller Order', sellerOrderData);
  }, []);

  const empty = () => (
    <View style={{ alignItems: 'center', marginTop: 90 }}>
      <Image source={DiminatiNull} style={{ width: 172, height: 121 }} />
      <Text style={{ color: COLORS.neutral3, textAlign: 'center', fontSize: SIZES.h5 }}>Belum ada produkmu yang diminati nih, sabar ya rejeki nggak kemana kok</Text>
    </View>
  );

  return (
    <SafeAreaView>
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
            date="20 Apr, 14:04"
            price={item.price}
            status={item.status}
            isSeen={false}
            onPress={() => navigation.navigate('BidderInfo', { orderId: item.id })}
          />
        )}
      />
    </SafeAreaView>
  );
}

export default Diminati;

const styles = StyleSheet.create({});
