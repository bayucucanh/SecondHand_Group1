import { Text, View, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { t } from 'i18next';
import styles from '../../constant/styles';
import { FONTS, SIZES, COLORS } from '../../constant';
import { getAllBidProduct } from '../../redux/actions/getAllBidProduct';
import { Header, NotificationCard } from '../../components';
import { SelectionImage } from '../../assets';

function BuyerOrder({ navigation }) {
  const dispatch = useDispatch();

  const allBidProduct = useSelector((state) => state.allBid.allBidProduct);
  const accessToken = useSelector((state) => state.login.userData.access_token);

  useEffect(() => {
    dispatch(getAllBidProduct(accessToken));
  }, []);

  function Empty() {
    return (
      <View style={{
        alignItems: 'center', justifyContent: 'center', height: SIZES.height * 0.8,
      }}
      >
        <SelectionImage width={SIZES.width * 0.6} height={SIZES.width * 0.4} />
        <Text style={{
          color: COLORS.neutral3, textAlign: 'center', ...FONTS.bodyLargeRegular, marginTop: SIZES.padding3,
        }}
        >
          {t('emptyOfferList')}
        </Text>
      </View>
    );
  }

  return (
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
          ListEmptyComponent={Empty}
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
