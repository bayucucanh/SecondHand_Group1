import { Text, View, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../constant/styles';
import { FONTS, SIZES, COLORS } from '../../constant';
import { getAllBidProduct } from '../../redux/actions/getAllBidProduct';
import { Header, NotificationCard } from '../../components';

function BuyerOrder({ navigation }) {
  const dispatch = useDispatch();

  const allBidProduct = useSelector((state) => state.allBid.allBidProduct);
  const accessToken = useSelector((state) => state.login.userData.access_token);

  useEffect(() => {
    dispatch(getAllBidProduct(accessToken));
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.neutral1,
        paddingBottom: SIZES.padding6,
        paddingTop: 20,
      }}
    >
      <Header title="Daftar Penawaran Produk" />
      <View style={{ marginHorizontal: SIZES.padding5 }}>
        <FlatList
          data={allBidProduct}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          initialNumToRender={4}
          renderItem={({ item }) => (
            <NotificationCard
              image={item?.Product?.image_url}
              name={item?.Product?.name}
              date={item?.transaction_date}
              price={item?.base_price}
              status={item?.status}
              offeringPrice={item?.price}
              isSeen
              onPress={() => navigation.navigate('DetailBuyerOrder', { orderId: item?.id })}
            />
          )}
        />
      </View>
    </View>
  );
}

export default BuyerOrder;
