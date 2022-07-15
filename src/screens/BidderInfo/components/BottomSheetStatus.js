import {
  ScrollView, Text, View, Image,
} from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { CustomButton } from '../../../components';
import styles from '../../../constant/styles';
import { COLORS, SIZES, FONTS } from '../../../constant';

export function BottomSheetStatus(value, setValue) {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        padding: SIZES.h2,
      }}
    >
      <Text
        style={{
          color: COLORS.black,
          ...FONTS.bodyLargeMedium,
          fontWeight: '500',
        }}
      >
        Perbarui status penjualan produkmu
      </Text>

      <View style={{ marginTop: SIZES.padding5 }}>
        <RadioButton.Group
          onValueChange={(newValue) => setValue(newValue)}
          value={value}
        >
          <View style={{ flexDirection: 'row' }}>
            <View style={{ height: 10 }}>
              <RadioButton value="seller" color={COLORS.primaryPurple4} />
            </View>
            <View style={{ marginLeft: SIZES.padding4 }}>
              <Text
                style={{
                  textAlignVertical: 'center',
                  ...FONTS.bodyNormalMedium,
                  color: COLORS.black,
                  fontWeight: '400',
                }}
              >
                Berhasil Terjual
              </Text>
              <Text style={{ ...FONTS.bodyNormalMedium }}>
                Kamu telah sepakat menjual produk ini kepada pembeli
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: SIZES.padding5 }}>
            <View style={{ height: 10 }}>
              <RadioButton value="available" color={COLORS.primaryPurple4} />
            </View>
            <View style={{ marginLeft: SIZES.padding4 }}>
              <Text
                style={{
                  textAlignVertical: 'center',
                  ...FONTS.bodyNormalMedium,
                  color: COLORS.black,
                  fontWeight: '400',
                }}
              >
                Batalkan transaksi
              </Text>
              <Text style={{ ...FONTS.bodyNormalMedium }}>
                Kamu membatalkan transaksi produk ini dengan pembeli
              </Text>
            </View>
          </View>
        </RadioButton.Group>
      </View>
      <CustomButton
        onPress={() => console.log(value)}
        buttonStyle={{ width: '100%', marginTop: 15 }}
        title="Kirim"
        enabled
      />
    </ScrollView>
  );
}
