import {
  StyleSheet, Text, View, Dimensions, ScrollView,
} from 'react-native';
import React, { useEffect } from 'react';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import {
  CustomButton,
  Header, HelperText, InputDropdown, InputText, LoadingScreen, PhotoProfile,
} from '../../components';
import {
  COLORS, FONTS, SIZES,
} from '../../constant';
import { productValidationSchema, profileValidationSchema } from '../../utils';
import FocusAwareStatusBar from '../../utils/focusAwareStatusBar';
import { addDataProduct } from '../../redux/actions/pushDataProduct';
import { putDataProduct } from '../../redux/actions/updateDataProduct';

function Jual({ route }) {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { data } = route.params;

  const accessToken = useSelector((state) => state.login.userData.access_token);
  const dataCategories = useSelector((state) => state.home.categories);
  const dataProfile = useSelector((state) => state.profile.profileData);
  const isLoading = useSelector((state) => state.global.isLoading);

  const onPost = async (values) => {
    const formdata = new FormData();
    formdata.append('name', values.name);
    formdata.append('description', values.description);
    formdata.append('base_price', values.base_price);
    formdata.append('category_ids', values.category_ids.toString());
    formdata.append('location', values.location);
    if (data !== false) {
      if (values.image != data.image_url) {
        formdata.append('image', {
          uri: values.image.uri,
          type: 'image/jpeg',
          name: values.image.fileName,
        });
      }
      await dispatch(putDataProduct(accessToken, data.id, formdata, navigation));
    } else {
      formdata.append('image', {
        uri: values.image.uri,
        type: 'image/jpeg',
        name: values.image.fileName,
      });
      await dispatch(addDataProduct(accessToken, formdata, navigation));
    }
  };

  const checkEnabled = (isValid, errors, dirty) => (data !== false ? (
    !errors.name && !errors.base_price
    && !errors.description && !errors.category_ids
  ) : (
    isValid && !errors.name && !errors.base_price
    && !errors.description && !errors.category_ids
    && !errors.image && dirty
  ));

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: COLORS.neutral1 }}
      >
        <View style={{
          flex: 1, paddingTop: 20, marginBottom: SIZES.padding6,
        }}
        >
          <FocusAwareStatusBar barStyle="dark-content" color="white" />
          <Header title={data == false ? t('sellTitle') : t('updateProductTitle')} />
          <Formik
            validationSchema={productValidationSchema}
            initialValues={{
              name: data?.name ? data?.name : '',
              description: data?.description ? data?.description : '',
              base_price: data?.base_price ? `${data?.base_price}` : '',
              category_ids: data?.Categories ? data?.Categories.map((item) => item.id) : [],
              location: dataProfile.city,
              image: data?.image_url ? data?.image_url : '',
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              values,
              errors,
              touched,
              dirty,
              isValid,
            }) => (
              <View style={{ marginHorizontal: SIZES.padding5 }}>
                <Text style={styles.inputLabel}>{t('productNameTitle')}</Text>
                <InputText
                  placeholder={t('productNamePlaceholder')}
                  name="name"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  error={touched.name && errors.name}
                  value={values.name}
                />
                {touched.name && errors.name && (
                <HelperText text={t(errors.name)} />
                )}
                <Text style={styles.inputLabel}>{t('priceTitle')}</Text>
                <InputText
                  placeholder={t('pricePlaceholder')}
                  name="base_price"
                  onChangeText={handleChange('base_price')}
                  onBlur={handleBlur('base_price')}
                  error={touched.base_price && errors.base_price}
                  value={values.base_price}
                  type="number-pad"
                />
                {touched.base_price && errors.base_price && (
                <HelperText text={t(errors.base_price)} />
                )}

                <Text style={styles.inputLabel}>{t('categoryTitle')}</Text>
                <InputDropdown
                  data={dataCategories}
                  setFieldValue={setFieldValue}
                  value={values.category_ids}
                  initialData={values.category_ids}
                  schema={{
                    label: 'name',
                    value: 'id',
                  }}
                  multiple
                  mode="BADGE"
                  name="category_ids"
                  placeholder={t('categoryPlaceholder')}
                  error={touched.category_ids && errors.category_ids}
                />
                { touched.category_ids && errors.category_ids && (
                <HelperText text={t(errors.category_ids)} />
                )}

                <Text style={styles.inputLabel}>{t('descriptionTitle')}</Text>
                <InputText
                  name="description"
                  onChangeText={handleChange('description')}
                  onBlur={handleBlur('description')}
                  error={touched.description && errors.description}
                  value={values.description}
                  placeholder={t('descriptionPlaceholder')}
                  style={{ textAlignVertical: 'top', height: 80 }}
                />
                { touched.description && errors.description && (
                <HelperText text={t(errors.description)} />
                )}
                <Text style={styles.inputLabel}>{t('photoProductTitle')}</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginVertical: 24 }}>
                  <PhotoProfile
                    image={{ uri: values.image }}
                    name="image"
                    style={{
                      width: 96,
                      height: 96,
                      backgroundColor: COLORS.neutral1,
                      borderStyle: 'dashed',
                      borderColor: COLORS.neutral2,
                      borderWidth: values.image === '' ? 2 : 0,
                      marginRight: 28,
                      marginTop: -24,
                      marginBottom: -12,
                    }}
                    setFieldValue={setFieldValue}
                    icon="plus"
                    colorIcon={COLORS.neutral2}
                  />
                </View>
                {data !== false ? (
                  <View style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: SIZES.padding2,
                  }}
                  >
                    <CustomButton
                      buttonStyle={{ width: '100%' }}
                      title="Terbitkan"
                      enabled
                      onPress={() => onPost(values)}
                    />
                  </View>
                ) : (
                  <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', marginTop: SIZES.padding2,
                  }}
                  >
                    <View style={{
                      flex: 1,
                      marginRight: SIZES.base,
                      borderColor: (checkEnabled(isValid, errors, dirty)) ? COLORS.primaryPurple4 : COLORS.neutral2,
                      borderWidth: 2,
                      borderRadius: SIZES.radius2,
                    }}
                    >
                      <CustomButton
                        onPress={() => navigation.navigate('Product', { values })}
                        title={t('sellPreviewButton')}
                        type
                        enabled={checkEnabled(isValid, errors, dirty)}
                      />

                    </View>
                    <View style={{ flex: 1, marginLeft: 8 }}>
                      <CustomButton
                        onPress={() => onPost(values)}
                        title={t('sellPostButton')}
                        enabled={checkEnabled(isValid, errors, dirty)}
                      />
                    </View>
                  </View>
                )}

              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
      {isLoading && (
      <LoadingScreen />
      )}
    </>
  );
}

export default Jual;

const styles = StyleSheet.create({
  inputLabel: {
    marginLeft: 3,
    ...FONTS.bodyNormalRegular,
    color: COLORS.neutral5,
    marginTop: SIZES.padding3,
  },
});
