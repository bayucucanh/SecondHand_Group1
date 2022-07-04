import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import { COLORS, SIZES, FONTS } from '../../constant';
import { formatRupiah } from '../../utils/formatCurrency';
import styles from '../../constant/styles';

function ProductCard({
  name, categories, basePrice, imageUrl, style, onPress,
}) {
  return (
    <TouchableOpacity style={[styles.card, { ...style }]} onPress={onPress}>
      <Image
        style={{
          width: 140,
          height: 100,
          backgroundColor: COLORS.neutral5,
          borderRadius: SIZES.base,
        }}
        source={{
          uri: imageUrl,
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
      <FlatList
        data={categories}
        horizontal
        keyExtractor={(item, index) => item.id + index.toString()}
        renderItem={({ item }) => (
          <Text
            style={[FONTS.bodySmallRegular, {
              color: COLORS.neutral3,
            }]}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.name}
            {', '}
          </Text>
        )}
      />
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
