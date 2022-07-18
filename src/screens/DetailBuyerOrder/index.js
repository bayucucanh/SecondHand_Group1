import {
  ScrollView, Text, View, Image,
} from 'react-native';
import React, { useEffect, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import {
  deleteBid,
  getBidDetailProduct,
  updateBid,
} from '../../redux/actions/getAllBidProduct';
import { FONTS, SIZES, COLORS } from '../../constant';
import styles from '../../constant/styles';
import {
  CustomButton,
  GoBackIcon,
  LoadingScreen,
  PhotoProfile,
  BottomSheetComponent,
  InputText,
  HelperText,
} from '../../components';
import { bidPriceSchema, formatRupiah } from '../../utils';

function DetailBuyerOrder({ route, navigation }) {
  const { orderId } = route.params;
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const accessToken = useSelector((state) => state.login.userData.access_token);
  const detailData = useSelector((state) => state.allBid.detailBidProduct);
  const loading = useSelector((state) => state.global.isLoading);

  const sheetRef = useRef(null);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  useEffect(() => {
    dispatch(getBidDetailProduct(orderId, accessToken, navigation));
  }, [dispatch]);

  const submitBid = (bid) => {
    const data = {
      bid_price: bid,
    };
  };

  const handleDelete = () => {
    console.log('Delete');
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
                {t('bottomSheetBidTitle')}
              </Text>
              <Text style={{ color: COLORS.neutral3, ...FONTS.bodyNormalMedium }}>
                {t('bottomSheetBidText')}
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
                      uri: detailData?.Product?.image_url,
                    }}
                    style={{ width: 48, height: 48, borderRadius: 10 }}
                  />
                </View>
                <View style={{ paddingLeft: SIZES.padding3 }}>
                  <Text
                    style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}
                  >
                    {detailData?.Product?.name}
                  </Text>
                  <Text
                    style={{
                      ...FONTS.bodyNormalRegular,
                      color: COLORS.neutral3,
                    }}
                  >
                    Ditawar
                    {' '}
                    {formatRupiah(detailData?.price)}
                  </Text>
                </View>
              </View>
              <View style={{ marginVertical: SIZES.h2 }}>
                <Text style={{ ...FONTS.bodyNormalBold }}>
                  {t('bargainPrice')}
                </Text>
                <InputText
                  placeholder={t('bidInputText')}
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
                title={t('edit')}
                enabled={!errors.bid_price}
              />
            </View>
          </ScrollView>
        )}
      </Formik>
    );
  }

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: COLORS.neutral1 }}
      >
        <View style={{ flex: 1, marginBottom: SIZES.padding5 }}>
          <Image
            source={{ uri: detailData?.Product?.image_url }}
            style={{ height: 300 }}
          />
          <GoBackIcon iconColor={COLORS.neutral5} size={28} style={{ top: 28 }} />
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
              <Text style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}>
                {detailData?.Product?.name}
              </Text>
              <Text
                style={{
                  ...FONTS.bodyLargeRegular,
                  fontSize: 18,
                  color: COLORS.neutral5,
                }}
              >
                {formatRupiah(detailData?.Product?.base_price)}
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
                  image={{ uri: detailData?.Product?.User?.image_url }}
                  style={{ width: 48, height: 48 }}
                  styleImage={{ width: 48, height: 48 }}
                />
              </View>
              <View style={{ paddingLeft: SIZES.padding3 }}>
                <Text
                  style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}
                >
                  {detailData?.Product?.User?.full_name}
                </Text>
                <Text
                  style={{ ...FONTS.bodyNormalRegular, color: COLORS.neutral3 }}
                >
                  {detailData?.Product?.User?.city}
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
              <Text style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}>
                {t('descriptionTitle')}
              </Text>
              <Text
                style={{
                  ...FONTS.bodyLargeRegular,
                  paddingTop: SIZES.padding3,
                  color: COLORS.neutral3,
                }}
              >
                {detailData?.Product?.description}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 24,
            }}
          >
            <View
              style={{
                flex: 1,
                marginRight: SIZES.base,
                borderColor: COLORS.primaryPurple4,
                borderWidth: 2,
                borderRadius: SIZES.radius2,
              }}
            >
              <CustomButton
                onPress={() => handleSnapPress(2)}
                title={t('edit')}
                type
                enabled
              />
            </View>
            <View style={{ flex: 1, marginLeft: 8 }}>
              <CustomButton
                // onPress={() => dispatch(deleteDataProduct(accessToken, values.id))}
                onPress={() => handleDelete()}
                title={t('delete')}
                enabled
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomSheetComponent
        sheetRef={sheetRef}
        component={BottomSheetComp}
        type="bid"
      />
      {loading && <LoadingScreen />}
    </>
  );
}

export default DetailBuyerOrder;
