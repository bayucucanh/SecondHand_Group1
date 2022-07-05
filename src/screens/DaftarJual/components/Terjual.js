import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loading, NotificationCard } from '../../../components';
import { DiminatiNull } from '../../../assets/image';
import { COLORS, SIZES } from '../../../constant';

function Terjual() {
  const productList = useSelector((state) => state.sellerProduct.sellerProductList);

  return (
    <View>
      {productList.length < 1 && (
        <View style={{ alignItems: 'center', marginTop: 90 }}>
          <Image source={DiminatiNull} style={{ width: 172, height: 121 }} />
          <Text style={{ color: COLORS.neutral3, textAlign: 'center', fontSize: SIZES.h5 }}>Belum ada produkmu yang diminati nih, sabar ya rejeki nggak kemana kok</Text>
        </View>
      )}
      {productList.map((item) => (
        item.status == 'sold' && (
          <NotificationCard
            key={item.id}
            image={item.image_url}
            name={item.name}
            date="20 Apr, 14:04"
            price={item.base_price}
            status="bid"
            isSeen={false}
          />
        )
      ))}

    </View>
  );
}

export default Terjual;

const styles = StyleSheet.create({});
