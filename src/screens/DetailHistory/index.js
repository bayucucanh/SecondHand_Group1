import {
  Text, View, ScrollView, Image,
} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoBackIcon, Header, Loading } from '../../components';
import { COLORS, SIZES, FONTS } from '../../constant';
import { getDataDetailHistory } from '../../redux/actions';
import { formatDate, formatRupiah } from '../../utils';
import styles from '../../constant/styles';

function DetailHistory({ route }) {
  const { historyId } = route.params;
  const dispatch = useDispatch();

  // Selector
  const accessToken = useSelector((state) => state.login.userData.access_token);
  const detailHistory = useSelector((state) => state.history.detailHistory);
  const loading = useSelector((state) => state.global.isLoading);

  useEffect(() => {
    dispatch(getDataDetailHistory(accessToken, historyId));
  }, [dispatch, historyId, accessToken]);

  if (loading) {
    return <Loading />;
  }
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: COLORS.neutral1 }}
    >
      <View style={{ flex: 1, marginBottom: SIZES.padding5 }}>
        <Image
          source={{ uri: detailHistory?.image_url }}
          style={{ height: 300 }}
        />
        <GoBackIcon iconColor={COLORS.neutral5} size={28} style={{ top: 28 }} />
        <View style={{ marginHorizontal: SIZES.padding5 }}>
          <View
            style={[
              styles.card,
              {
                marginTop: -40,
                paddingHorizontal: SIZES.padding5,
                paddingVertical: SIZES.padding3,
              },
            ]}
          >
            <Text style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}>
              {detailHistory?.product_name}
            </Text>
            <Text
              style={{
                ...FONTS.bodyLargeRegular,
                fontSize: 18,
                color: COLORS.neutral5,
              }}
            >
              {formatRupiah(detailHistory?.price)}
            </Text>
          </View>

          <View
            style={[
              styles.card,
              {
                marginTop: SIZES.padding3,
                paddingHorizontal: SIZES.padding5,
                paddingVertical: SIZES.padding3,
              },
            ]}
          >
            <Text
              style={{
                ...FONTS.bodyLargeBold,
                color: COLORS.neutral5,
                textTransform: 'capitalize',
              }}
            >
              Status
            </Text>
            <Text
              style={{
                ...FONTS.bodyLargeMedium,
                color: COLORS.neutral5,
                textTransform: 'capitalize',
              }}
            >
              {detailHistory?.status}
            </Text>
            <Text
              style={{
                ...FONTS.bodyNormalRegular,
                color: COLORS.neutral3,
              }}
            >
              {formatDate(detailHistory?.transaction_date)}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default DetailHistory;
