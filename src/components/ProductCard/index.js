import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import React from 'react';
import { neutral3, neutral5 } from '../../constant/color';
import formatRupiah from '../../utils/formatCurrency';

function ProductCard({
  name, categories, basePrice, imageUrl,
}) {
  return (
    <View style={{
      borderRadius: 8,
      padding: 12,
      backgroundColor: 'white',
      elevation: 4,
    }}
    >
      <Image
        style={{
          width: 140, height: 100, backgroundColor: neutral5, borderRadius: 8,
        }}
        source={{
          uri: imageUrl,
        }}
      />
      <Text style={{
        fontFamily: 'Poppins-Regular', fontSize: 14, marginTop: 8, color: neutral5,
      }}
      >
        {name}
      </Text>
      <Text style={{
        fontFamily: 'Poppins-Regular', fontSize: 10, color: neutral3,
      }}
      >
        {categories}
      </Text>
      <Text style={{
        fontFamily: 'Poppins-Regular', fontSize: 14, marginVertical: 8, color: neutral5,
      }}
      >
        {formatRupiah(basePrice)}
      </Text>
    </View>
  );
}

export default ProductCard;

const styles = StyleSheet.create({});
