import {
  StyleSheet, Text, View, Dimensions, ScrollView,
} from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import {
  CustomButton,
  Header, HelperText, InputDropdown, InputText, PhotoProfile,
} from '../../components';
import {
  COLORS, FONTS, SIZES,
} from '../../constant';
import { productValidationSchema, profileValidationSchema } from '../../utils';
import FocusAwareStatusBar from '../../utils/focusAwareStatusBar';

function Jual() {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();

  const dataCategories = useSelector((state) => state.home.categories);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: COLORS.neutral1 }}
    >
      <View style={{
        flex: 1, paddingTop: 20, marginBottom: SIZES.padding6,
      }}
      >
        <FocusAwareStatusBar barStyle="dark-content" color="white" />
        <Header title={t('sellTitle')} />
        <Formik
          validationSchema={productValidationSchema}
          initialValues={{
            name: '',
            description: '',
            base_price: '',
            category_ids: [],
            location: '',
            image: '',
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            values,
            errors,
            isValid,
            touched,
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
                  style={{
                    width: 96,
                    height: 96,
                    backgroundColor: COLORS.neutral1,
                    borderStyle: 'dashed',
                    borderColor: COLORS.neutral2,
                    borderWidth: 2,
                    marginRight: 28,
                    marginTop: -24,
                    marginBottom: -12,
                  }}
                  icon="plus"
                  colorIcon={COLORS.neutral2}
                />
              </View>
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between', marginTop: 24,
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
                    onPress={() => navigation.navigate('Product', { values })}
                    title={t('sellPreviewButton')}
                    buttonStyle={{ backgroundColor: COLORS.neutral1, borderColor: COLORS.primaryPurple4, borderWidth: 2 }}
                    textStyle={{ color: COLORS.neutral5 }}
                //     enabled={isValid && !errors.name
                //   && !errors.city && !errors.address && !errors.phone_number}
                  />

                </View>
                <View style={{ flex: 1, marginLeft: 8 }}>
                  <CustomButton
                    onPress={handleSubmit}
                    title={t('sellPostButton')}
                    enabled={false}
                //     enabled={isValid && !errors.name
                //   && !errors.city && !errors.address && !errors.phone_number}
                  />
                </View>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
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
