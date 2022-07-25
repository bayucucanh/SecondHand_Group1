import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useState } from 'react';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS, SIZES, FONTS } from '../../constant';
import { formatRupiah } from '../../utils/formatCurrency';
import styles from '../../constant/styles';
import LoadingScreen from '../LoadingScreen';

function ProductCard({
  name, categories, basePrice, imageUrl, style, onPress, icon, checkEnable, enable, productDisable,
}) {
  return (
    <TouchableOpacity style={[styles.card, { ...style }]} onPress={onPress} disabled={productDisable}>
      <FastImage
        style={{
          width: SIZES.width * 0.34,
          height: 100,
          backgroundColor: COLORS.neutral5,
          borderRadius: SIZES.base,
        }}
        source={{
          uri: imageUrl,
          priority: FastImage.priority.high,
        }}
      />
      <View style={{ flexDirection: 'row' }}>
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
        {icon && (
          <View style={{ position: 'absolute', right: 0, top: 10 }}>
            <TouchableWithoutFeedback onPress={checkEnable}>
              <Icon name={enable ? 'bookmark-o' : 'bookmark'} color={COLORS.neutral5} size={24} />
            </TouchableWithoutFeedback>
          </View>
        )}
      </View>
      <Text
        style={[FONTS.bodySmallRegular, {
          color: COLORS.neutral3,
        }]}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {categories?.map((item) => (categories.length > 1 ? `${item.name}, ` : item.name))}
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
