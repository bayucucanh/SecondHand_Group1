import { Text, View, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../../components';
import { COLORS, SIZES, FONTS } from '../../constant';
import { getDataDetailHistory } from '../../redux/actions';

function DetailHistory({ route }) {
  const { historyId } = route.params;
  const dispatch = useDispatch();

  // Selector
  const accessToken = useSelector((state) => state.login.userData.access_token);

  useEffect(() => {
    console.log('Token Detail', accessToken);
    console.log('Histori ID', historyId);
    dispatch(getDataDetailHistory(accessToken, historyId));
  }, [dispatch]);

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
        <Header title="Detail Transaksi" />
        <Text>{historyId}</Text>
      </View>
    </ScrollView>
  );
}

export default DetailHistory;
