import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import FastImage from 'react-native-fast-image';
import { COLORS, SIZES, FONTS } from '../../constant';
import { formatRupiah } from '../../utils/formatCurrency';
import styles from '../../constant/styles';
import LoadingScreen from '../LoadingScreen';

function ProductCard({
  name, categories, basePrice, imageUrl, style, onPress,
}) {
  return (
    <TouchableOpacity style={[styles.card, { ...style }]} onPress={onPress}>
      <FastImage
        style={{
          width: 140,
          height: 100,
          backgroundColor: COLORS.neutral5,
          borderRadius: SIZES.base,
        }}
        source={{
          uri: imageUrl,
          priority: FastImage.priority.high,
        }}
      />
      <Text
        style={[FONTS.bodyLargeRelugar, {
          marginTop: SIZES.base,
          color: COLORS.neutral5,
        }]}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {name}
      </Text>
      <Text
        style={[FONTS.bodySmallRegular, {
          color: COLORS.neutral3,
        }]}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {categories.map((item) => (categories.length > 1 ? `${item.name}, ` : item.name))}
      </Text>
      <Text
        style={[FONTS.bodyNormalRegular, {
          marginVertical: SIZES.base,
          color: COLORS.neutral5,
        }]}
      >
        {formatRupiah(basePrice)}
      </Text>
    </TouchableOpacity>
  );
}

export default ProductCard;
