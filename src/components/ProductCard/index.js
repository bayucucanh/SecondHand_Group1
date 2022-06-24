import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import { neutral3, neutral5 } from '../../constant/color';
import { formatRupiah } from '../../utils/formatCurrency';
import styles from '../../constant/styles';

function ProductCard({
  name, categories, basePrice, imageUrl, style,
}) {
  return (
    <TouchableOpacity style={[styles.card, { ...style }]}>
      <Image
        style={{
          width: 140,
          height: 100,
          backgroundColor: neutral5,
          borderRadius: 8,
        }}
        source={{
          uri: imageUrl,
        }}
      />
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: 14,
          marginTop: 8,
          color: neutral5,
        }}
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
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 10,
              color: neutral3,
            }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.name}
            {', '}
          </Text>
        )}
      />
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: 14,
          marginVertical: 8,
          color: neutral5,
        }}
      >
        {formatRupiah(basePrice)}
      </Text>
    </TouchableOpacity>
  );
}

export default ProductCard;

// const styles = StyleSheet.create({
//   wrapper: {
//     borderRadius: 8,
//     padding: 12,
//     backgroundColor: 'white',
//     elevation: 4,
//     maxWidth: 160,
//     marginBottom: 10,
//   },
// });
