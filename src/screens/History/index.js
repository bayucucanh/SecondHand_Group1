import {
  ScrollView,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { t } from 'i18next';
import { SIZES, COLORS, FONTS } from '../../constant';
import styles from '../../constant/styles';
import {
  Header, Loader, Loading, LoadingScreen, NotificationCard,
} from '../../components';
import { getDataHistory } from '../../redux/actions';
import { sortByDate } from '../../utils';
import { SelectionImage } from '../../assets';

function History({ navigation }) {
  const dispatch = useDispatch();

  // Selector
  const accessToken = useSelector((state) => state.login.userData.access_token);
  const allHistory = useSelector((state) => state.history.allHistory?.sort(sortByDate));
  const loading = useSelector((state) => state.global.isLoading);

  useEffect(() => {
    dispatch(getDataHistory(accessToken));
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
          {t('emptyHistory')}
        </Text>
      </View>
    );
  }

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
        <Header title={t('transactionHistory')} />
        <View style={{ marginHorizontal: SIZES.padding5 }}>
          <FlatList
            data={allHistory}
            initialNumToRender={4}
            keyExtractor={(item, index) => item.id + index.toString()}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={Empty}
            renderItem={({ item }) => (
              <NotificationCard
                image={item?.image_url}
                name={item?.product_name}
                date={item?.transaction_date}
                price={item?.price}
                status={item?.status}
                onPress={() => navigation.navigate('DetailHistory', { historyId: item.id })}
              />
            )}
          />
        </View>
      </View>
      {loading && <LoadingScreen />}
    </>
  );
}

export default History;
