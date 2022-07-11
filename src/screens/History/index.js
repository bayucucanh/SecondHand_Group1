import { ScrollView, Text, View } from 'react-native';
import React from 'react';
import { SIZES, COLORS, FONTS } from '../../constant';
import styles from '../../constant/styles';
import { Header, NotificationCard } from '../../components';

function History() {
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
          <NotificationCard
            image="https://picsum.photos/48"
            name="Nama Product"
            date="20 Apr, 14:04"
            price="17000"
            status="accepted"
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default History;
