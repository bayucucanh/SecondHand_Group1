import {
  StyleSheet, Text, View, ScrollView, Image, Modal, Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { COLORS, FONTS, SIZES } from '../../constant';
import {
  CustomButton, GoBackIcon, LoadingScreen, PhotoProfile,
} from '../../components';
import styles from '../../constant/styles';
import { deleteDataProduct } from '../../redux/actions/deleteSellerProduct';
import { addDataProduct } from '../../redux/actions/pushDataProduct';

function Product({ route, navigation }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { values, list } = route.params;
  const profileData = useSelector((state) => state.profile.profileData);
  const categoryData = useSelector((state) => state.home.categories);
  const accessToken = useSelector((state) => state.login.userData.access_token);
  const isLoading = useSelector((state) => state.global.isLoading);
  const [modalVisible, setModalVisible] = useState(false);

  const onPost = async () => {
    const formdata = new FormData();
    formdata.append('name', values.name);
    formdata.append('description', values.description);
    formdata.append('base_price', values.base_price);
    formdata.append('category_ids', values.category_ids.toString());
    formdata.append('location', values.location);
    formdata.append('image', {
      uri: values.image.uri,
      type: 'image/jpeg',
      name: values.image.fileName,
    });
    await dispatch(addDataProduct(accessToken, formdata, navigation));
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: COLORS.neutral1 }}
      >
        <Modal
          animationType="fade"
          visible={modalVisible}
          transparent
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={{
            flex: 1,
            height: SIZES.height,
            width: SIZES.width,
            backgroundColor: 'rgba(0,0,0,0.6)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            <View style={{
              backgroundColor: COLORS.white,
              borderRadius: SIZES.radius2,
              paddingVertical: SIZES.padding5,
              paddingHorizontal: SIZES.padding5 * 2,
              margin: SIZES.padding6,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
            >
              <Text style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5, alignSelf: 'flex-start' }}>
                {t('deleteProductTitle')}
              </Text>
              <Text style={{
                ...FONTS.bodyLargeRegular, paddingTop: SIZES.padding3, color: COLORS.neutral3,
              }}
              >
                {t('deleteProductMessage')}
              </Text>
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: SIZES.padding3,
              }}
              >
                <View style={{
                  flex: 1,
                  marginRight: SIZES.base,
                  borderColor: COLORS.primaryPurple4,
                  borderWidth: 2,
                  borderRadius: SIZES.radius2 + 10,
                }}
                >
                  <Pressable
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <CustomButton
                      title={t('no')}
                      type
                      enabled
                      size="small"
                    />
                  </Pressable>
                </View>
                <View style={{
                  flex: 1,
                  marginRight: SIZES.base,
                  borderColor: COLORS.primaryPurple4,
                  borderWidth: 2,
                  borderRadius: SIZES.radius2 + 10,
                  overflow: 'hidden',
                }}
                >
                  <Pressable
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      dispatch(deleteDataProduct(accessToken, values.id, navigation));
                    }}
                  >
                    <CustomButton
                      title={t('yes')}
                      enabled
                      size="small"
                    />
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <View style={{
          flex: 1, marginBottom: SIZES.padding5,
        }}
        >
          <Image
            source={{ uri: values.image_url || values.image.uri }}
            style={{ height: 300 }}
          />
          <GoBackIcon iconColor={COLORS.neutral5} size={28} style={{ top: 28 }} />
          <View style={{ marginHorizontal: SIZES.padding5 }}>
            <View style={[styles.card, { marginTop: -40, paddingHorizontal: SIZES.padding5, paddingVertical: SIZES.padding3 }]}>
              <Text style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}>{values.name}</Text>
              <Text style={{ ...FONTS.bodyNormalRegular, color: COLORS.neutral3 }}>
                {categoryData.map((item) => (
                  values.category_ids ? (
                    values.category_ids.map((item1) => (
                      item.id === item1
                    && (`${item.name}, `)
                    ))
                  ) : (
                    values.Categories.map((item1) => (
                      item.id === item1.id
                      && (`${item.name}, `)
                    ))
                  )
                ))}
              </Text>
              <Text style={{ ...FONTS.bodyLargeRegular, fontSize: 18, color: COLORS.neutral5 }}>{values.base_price}</Text>
            </View>
            <View style={[styles.card, {
              marginTop: SIZES.padding3, paddingHorizontal: SIZES.padding5, paddingVertical: SIZES.padding3, flexDirection: 'row',
            }]}
            >
              <View style={{ justifyContent: 'center' }}>
                <PhotoProfile image={{ uri: profileData.image_url }} style={{ width: 48, height: 48 }} styleImage={{ width: 48, height: 48 }} />
              </View>
              <View style={{ paddingLeft: SIZES.padding3 }}>
                <Text style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}>
                  {profileData.full_name}
                </Text>
                <Text style={{ ...FONTS.bodyNormalRegular, color: COLORS.neutral3 }}>{profileData.city}</Text>
              </View>
            </View>
            <View style={[styles.card, {
              marginTop: SIZES.padding3, paddingHorizontal: SIZES.padding5, paddingVertical: SIZES.padding3,
            }]}
            >
              <Text style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}>{t('descriptionTitle')}</Text>
              <Text style={{
                ...FONTS.bodyLargeRegular, paddingTop: SIZES.padding3, color: COLORS.neutral3,
              }}
              >
                {values.description}
              </Text>
            </View>
          </View>
        </View>

      </ScrollView>
      {!list ? (
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
            onPress={() => onPost()}
          />
        </View>
      ) : (
        <View style={{
          bottom: 23,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 24,
          position: 'absolute',
        }}
        >
          <View style={{
            flex: 1,
            marginRight: SIZES.base,
            borderColor: COLORS.primaryPurple4,
            borderWidth: 2,
            borderRadius: SIZES.radius2,
          }}
          >
            <CustomButton
              onPress={() => navigation.navigate('JualFull', { data: values })}
              title={t('edit')}
              type
              enabled
            />

          </View>
          <View style={{ flex: 1, marginLeft: 8 }}>
            <CustomButton
              // onPress={() => dispatch(deleteDataProduct(accessToken, values.id))}
              onPress={() => setModalVisible(true)}
              title={t('delete')}
              enabled
            />
          </View>
        </View>
      )}
      {isLoading && (
      <LoadingScreen />
      )}
    </>
  );
}

export default Product;
