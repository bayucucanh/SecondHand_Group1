import {
  Text, View, ScrollView, Image, FlatList,
} from 'react-native';
import React, {
  useEffect, useState, useRef, useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import {
  COLORS, SIZES, FONTS, style,
} from '../../constant';
import {
  GoBackIcon,
  PhotoProfile,
  CustomButton,
  InputText,
  BottomSheetComponent,
  Loading,
  HelperText,
} from '../../components';
import { getDetailData, getAllBidProduct, bidProduct } from '../../redux/actions';
import styles from '../../constant/styles';
import formatRupiah from '../../utils/formatCurrency';
import { bidPriceSchema } from '../../utils';

function Detail({ route, navigation }) {
  const dispatch = useDispatch();

  const { productId } = route.params;

  const allBidProduct = useSelector((state) => state.allBid.allBidProduct.filter((item) => item.product_id === productId));
  const accessToken = useSelector((state) => state.login.userData);
  const login = useSelector((state) => state.login.isLogin);
  const detailData = useSelector((state) => state.detail.detailProduct);
  const loading = useSelector((state) => state.global.isLoading);
  const { t, i18n } = useTranslation();

  const sheetRef = useRef(null);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  useEffect(() => {
    dispatch(getDetailData(productId));
    if (login) {
      dispatch(getAllBidProduct(accessToken.access_token));
    }
  }, [productId, dispatch, login]);

  const submitBid = (bid) => {
    const data = {
      product_id: productId,
      bid_price: bid,
    };
    dispatch(bidProduct(data, accessToken.access_token, navigation));
  };

  function BottomSheetComp() {
    return (
      <Formik
        validationSchema={bidPriceSchema}
        initialValues={{ bid_price: '' }}
        onSubmit={(values) => submitBid(values.bid_price)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          touched,
          values,
          errors,
          isValid,
        }) => (
          <ScrollView>
            <View
              style={{
                flex: 1,
                backgroundColor: COLORS.white,
                padding: SIZES.h2,
              }}
            >
              <Text style={{ color: COLORS.black, ...FONTS.bodyNormalMedium }}>
                Masukan Harga Tawarmu
              </Text>
              <Text style={{ color: COLORS.neutral3, ...FONTS.bodyNormalMedium }}>
                Harga tawaranmu akan diketahui penjual, jika penjual cocok kamu
                akan segera dihubungi penjual.
              </Text>
              <View
                style={[
                  styles.card,
                  {
                    marginTop: SIZES.padding3,
                    paddingHorizontal: SIZES.padding5,
                    paddingVertical: SIZES.padding3,
                    flexDirection: 'row',
                  },
                ]}
              >
                <View style={{ justifyContent: 'center' }}>
                  <Image
                    source={{
                      uri: detailData.image_url,
                    }}
                    style={{ width: 48, height: 48 }}
                  />
                </View>
                <View style={{ paddingLeft: SIZES.padding3 }}>
                  <Text
                    style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}
                  >
                    {detailData.name}
                  </Text>
                  <Text
                    style={{
                      ...FONTS.bodyNormalRegular,
                      color: COLORS.neutral3,
                    }}
                  >
                    {formatRupiah(detailData.base_price)}
                  </Text>
                </View>
              </View>
              <View style={{ marginVertical: SIZES.h2 }}>
                <Text style={{ ...FONTS.bodyNormalBold }}>Harga Tawar</Text>
                <InputText
                  placeholder="Masukan harga tawarmu"
                  name="bid_price"
                  style={{ marginTop: 4 }}
                  onChangeText={handleChange('bid_price')}
                  onBlur={handleBlur('bid_price')}
                  error={touched.bid_price && errors.bid_price}
                  value={values.bid_price}
                  type="number-pad"
                />
                {touched.bid_price && errors.bid_price && (
                  <HelperText text={t(errors.bid_price)} />
                )}
              </View>
              <CustomButton
                onPress={handleSubmit}
                buttonStyle={{ width: '100%' }}
                title="Kirim"
                enabled={isValid && !errors.bid_price}
              />
            </View>
          </ScrollView>
        )}
      </Formik>
    );
  }

  if (!loading) {
    return (
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: COLORS.neutral1 }}
        >
          <View style={{ flex: 1, marginBottom: SIZES.padding5 }}>
            <Image source={{ uri: detailData.image_url }} style={{ height: 300 }} />
            <GoBackIcon
              iconColor={COLORS.neutral5}
              size={28}
              style={{ top: 28 }}
            />
            <View style={{ marginHorizontal: SIZES.padding5 }}>
              <View
                style={[
                  styles.card,
                  {
                    marginTop: -40,
                    paddingHorizontal: SIZES.padding5,
                    paddingVertical: SIZES.padding3,
                  },
                ]}
              >
                <Text
                  style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}
                >
                  {detailData.name}
                </Text>
                <FlatList
                  data={detailData.Categories}
                  horizontal
                  keyExtractor={(item, index) => item.id + index.toString()}
                  renderItem={({ item, index }) => (
                    <Text
                      key={item.id}
                      style={{
                        ...FONTS.bodyNormalRegular,
                        color: COLORS.neutral3,
                      }}
                    >
                      {index > 0 ? ',' : ''}
                      {' '}
                      {item.name}
                    </Text>
                  )}
                />
                <Text
                  style={{
                    ...FONTS.bodyLargeRegular,
                    fontSize: 18,
                    color: COLORS.neutral5,
                  }}
                >
                  {formatRupiah(detailData.base_price)}
                </Text>
              </View>
              <View
                style={[
                  styles.card,
                  {
                    marginTop: SIZES.padding3,
                    paddingHorizontal: SIZES.padding5,
                    paddingVertical: SIZES.padding3,
                    flexDirection: 'row',
                  },
                ]}
              >
                <View style={{ justifyContent: 'center' }}>
                  <PhotoProfile
                    image={{ uri: detailData.User?.image_url }}
                    style={{ width: 48, height: 48 }}
                    styleImage={{ width: 48, height: 48 }}
                  />
                </View>
                <View style={{ paddingLeft: SIZES.padding3 }}>
                  <Text
                    style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}
                  >
                    {detailData.User?.full_name}
                  </Text>
                  <Text
                    style={{
                      ...FONTS.bodyNormalRegular,
                      color: COLORS.neutral3,
                    }}
                  >
                    {detailData.User?.city}
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.card,
                  {
                    marginTop: SIZES.padding3,
                    paddingHorizontal: SIZES.padding5,
                    paddingVertical: SIZES.padding3,
                  },
                ]}
              >
                <Text
                  style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}
                >
                  {t('descriptionTitle')}
                </Text>
                <Text
                  style={{
                    ...FONTS.bodyLargeRegular,
                    paddingTop: SIZES.padding3,
                    color: COLORS.neutral3,
                  }}
                >
                  {detailData.description}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
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
            title={
              login && allBidProduct[0]?.status
                ? 'Menunggu respon penjual'
                : 'Saya Tertarik dan Ingin Nego Produk'
            }
            enabled={!(login && allBidProduct[0]?.status)}
            onPress={() => (login ? handleSnapPress(2) : navigation.navigate('NotLogin'))}
          />
        </View>
        <BottomSheetComponent
          sheetRef={sheetRef}
          component={BottomSheetComp}
        />
      </>
    );
  }
  return <Loading />;
}

export default Detail;
