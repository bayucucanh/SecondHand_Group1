/* eslint-disable no-nested-ternary */
import {
  Text, View, ScrollView, Image, FlatList, TouchableWithoutFeedback,
} from 'react-native';
import React, {
  useEffect, useState, useRef, useCallback,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';
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
  LoadingScreen,
} from '../../components';
import { getDetailData, getAllBidProduct, bidProduct } from '../../redux/actions';
import styles from '../../constant/styles';
import formatRupiah from '../../utils/formatCurrency';
import { bidPriceSchema, showInfo } from '../../utils';
import { getDetailWishlistData } from '../../redux/actions/getWishlistDetail';
import { postWishlistData } from '../../redux/actions/pushWishlist';
import { deleteWishlistData } from '../../redux/actions/deleteWishlist';
import { getWishlistData } from '../../redux/actions/getWishlist';

function Detail({ route, navigation }) {
  const dispatch = useDispatch();

  const { productId } = route.params;

  const allBidProduct = useSelector((state) => state.allBid.allBidProduct.filter((item) => item.product_id === productId));
  const accessToken = useSelector((state) => state.login.userData);
  const login = useSelector((state) => state.login.isLogin);
  const detailData = useSelector((state) => state.detail.detailProduct);
  const wishlistData = useSelector((state) => state.wishlist.wishlistData.filter((item) => item.product_id === productId));
  const loading = useSelector((state) => state.global.isLoading);
  const profileData = useSelector((state) => state.profile.profileData);

  const [enable, setEnable] = useState(true);
  const { t } = useTranslation();

  const sheetRef = useRef(null);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  useEffect(() => {
    dispatch(getDetailData(productId));
    if (login) {
      dispatch(getWishlistData(accessToken.access_token));
      dispatch(getAllBidProduct(accessToken.access_token));
      if (wishlistData.length !== 0) {
        setEnable(false);
      }
    }
  }, [productId, dispatch, login]);

  const checkEnable = () => {
    if (login) {
      if (enable) {
        const dataId = {
          product_id: productId,
        };
        console.log('ini post');
        dispatch(postWishlistData(accessToken.access_token, dataId));
        dispatch(getWishlistData(accessToken.access_token));
      } else {
        console.log('ini delete');
        dispatch(deleteWishlistData(accessToken.access_token, wishlistData[0]?.id));
        dispatch(getWishlistData(accessToken.access_token));
      }
      setEnable(!enable);
    } else {
      showInfo(t('loginWishlistAlert'));
    }
  };

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
                <Text style={{ ...FONTS.bodyNormalBold }}>{t('bargainPrice')}</Text>
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
                title={t('sendButton')}
                enabled={isValid && !errors.bid_price}
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
        style={{ backgroundColor: COLORS.neutral1, height: SIZES.height, paddingBottom: SIZES.padding6 + SIZES.padding2 }}
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
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}
                >
                  {detailData.name}
                </Text>
                <View style={{ position: 'absolute', right: 0 }}>
                  <TouchableWithoutFeedback onPress={checkEnable}>
                    <Icon name={enable ? 'bookmark-o' : 'bookmark'} color={COLORS.neutral5} size={24} />
                  </TouchableWithoutFeedback>
                </View>
              </View>
              <Text
                style={{
                  ...FONTS.bodyNormalRegular,
                  color: COLORS.neutral3,
                }}
              >
                {detailData?.Categories?.map((item, index) => (
                  <Text key={item.id}>
                    {index > 0 ? ', ' : ''}
                    {item.name}
                  </Text>
                ))}
              </Text>

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
                  disabled
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
          backgroundColor: COLORS.neutral1,
        }}
      >
        {detailData.user_id !== accessToken?.id && (
          <CustomButton
            buttonStyle={{ width: '100%' }}
            title={
              login && allBidProduct[0]?.status
                ? t('waitingSellerResponse')
                : t('interestedAndWantToBargain')
            }
            enabled={!(login && allBidProduct[0]?.status)}
            onPress={() => (login ? profileData?.address == null ? navigation.navigate('ChangeProfile', { data: false }) : handleSnapPress(2) : navigation.navigate('NotLogin'))}
          />
        )}
      </View>
      <BottomSheetComponent
        sheetRef={sheetRef}
        component={BottomSheetComp}
        type="bid"
      />
      {loading && (
        <LoadingScreen />
      )}
    </>
  );
}

export default Detail;
