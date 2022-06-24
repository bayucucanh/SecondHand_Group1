import {
  StyleSheet, Text, View, ScrollView, Image,
} from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { neutral1, neutral3, neutral5 } from '../../constant/color';
import { CustomButton, GoBackIcon, PhotoProfile } from '../../components';
import styles from '../../constant/styles';

function Product({ route }) {
  const { values } = route.params;
  const profileData = useSelector((state) => state.profile.profileData);

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: neutral1 }}
      >
        <View style={{
          flex: 1, marginBottom: 32,
        }}
        >
          <Image
            source={{ uri: 'https://picsum.photos/360/300' }}
            style={{ height: 300 }}
          />
          <GoBackIcon iconColor={neutral5} size={28} style={{ top: 28 }} />
          <View style={{ marginHorizontal: 24 }}>
            <View style={[styles.card, { marginTop: -40, paddingHorizontal: 24, paddingVertical: 16 }]}>
              <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: neutral5 }}>{values.name}</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: neutral3 }}>{values.category_ids}</Text>
              <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, color: neutral5 }}>{values.base_price}</Text>
            </View>
            <View style={[styles.card, {
              marginTop: 16, paddingHorizontal: 24, paddingVertical: 16, flexDirection: 'row',
            }]}
            >
              <View style={{ justifyContent: 'center' }}>
                <PhotoProfile image={{ uri: profileData.image_url }} style={{ width: 48, height: 48 }} styleImage={{ width: 48, height: 48 }} />
              </View>
              <View style={{ paddingLeft: 16 }}>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: neutral5 }}>
                  {profileData.full_name}
                </Text>
                <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: neutral3 }}>{profileData.city}</Text>
              </View>
            </View>
            <View style={[styles.card, {
              marginTop: 16, paddingHorizontal: 24, paddingVertical: 16,
            }]}
            >
              <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: neutral5 }}>Deskripsi</Text>
              <Text style={{
                fontFamily: 'Poppins-Regular', fontSize: 18, paddingTop: 16, color: neutral3,
              }}
              >
                {values.description}
              </Text>
            </View>
          </View>
        </View>

      </ScrollView>
      <View style={{
        width: '100%',
        position: 'absolute',
        bottom: 23,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 24,
      }}
      >
        <CustomButton
          buttonStyle={{ width: '100%' }}
          title="Terbitkan"
          enabled
        />
      </View>
    </>
  );
}

export default Product;
