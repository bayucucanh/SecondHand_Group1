import { View, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { t } from 'i18next';
import { SIZES, COLORS } from '../../constant';
import { getAllBidProduct } from '../../redux/actions/getAllBidProduct';
import {
  Header, NotificationCard, Empty, LoadingScreen,
} from '../../components';

function BuyerOrder({ navigation }) {
  const dispatch = useDispatch();

  const allBidProduct = useSelector((state) => state.allBid.allBidProduct);
  const accessToken = useSelector((state) => state.login.userData.access_token);
  const loading = useSelector((state) => state.global.isLoading);

  useEffect(() => {
    dispatch(getAllBidProduct(accessToken));
  }, []);

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.neutral1,
          paddingBottom: SIZES.padding6,
          paddingTop: 20,
        }}
      >
        <Header title={t('buyerOrderTitle')} />
        <View style={{ marginHorizontal: SIZES.padding5 }}>
          <FlatList
            data={allBidProduct}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            initialNumToRender={4}
            ListEmptyComponent={<Empty title={t('emptyOfferList')} />}
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
      {loading && <LoadingScreen />}
    </>
  );
}

export default BuyerOrder;
