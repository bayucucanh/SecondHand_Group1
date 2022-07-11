import {
  ScrollView,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SIZES, COLORS, FONTS } from '../../constant';
import styles from '../../constant/styles';
import { Header, Loading, NotificationCard } from '../../components';
import { getDataHistory } from '../../redux/actions';
import { sortByDate } from '../../utils';

function History() {
  const dispatch = useDispatch();

  // Selector
  const accessToken = useSelector((state) => state.login.userData.access_token);
  const allHistory = useSelector((state) => state.history.allHistory);

  useEffect(() => {
    dispatch(getDataHistory(accessToken));
    console.log('Semua History', allHistory);
  }, [dispatch]);

  const renderFooter = () => <ActivityIndicator color="white" style={{ marginLeft: 8 }} />;

  return (
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
        <Header title="Riwayat Transaksi" />
        <View style={{ marginHorizontal: SIZES.padding5 }}>
          <FlatList
            data={allHistory.sort(sortByDate)}
            initialNumToRender={4}
            keyExtractor={(item, index) => item.id + index.toString()}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={renderFooter}
            renderItem={({ item }) => (
              <NotificationCard
                image={item?.image_url}
                name={item?.product_name}
                date={item?.transaction_date}
                price={item?.price}
                status={item?.status}
              />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default History;
