import {
  StyleSheet, Text, View, Dimensions, ScrollView,
} from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import {
  CustomButton,
  Header, HelperText, InputDropdown, InputText, PhotoProfile,
} from '../../components';
import {
  neutral1, neutral2, neutral3, neutral5, primaryPurple4,
} from '../../constant/color';
import { productValidationSchema, profileValidationSchema } from '../../utils';
import FocusAwareStatusBar from '../../utils/focusAwareStatusBar';

function Jual() {
  const dataCategories = useSelector((state) => state.home.categories);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: neutral1 }}
    >
      <View style={{
        flex: 1, paddingTop: 20, marginBottom: 32,
      }}
      >
        <FocusAwareStatusBar barStyle="dark-content" color="white" />
        <Header title="Lengkapi Detail Produk" />
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
            <View style={{ marginHorizontal: 24 }}>
              <Text style={styles.inputLabel}>Nama Produk</Text>
              <InputText
                placeholder="Nama Produk"
                name="name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                error={touched.name && errors.name}
                value={values.name}
              />
              {touched.name && errors.name && (
              <HelperText text={errors.name} />
              )}
              <Text style={styles.inputLabel}>Harga Produk</Text>
              <InputText
                placeholder="Rp 0,00"
                name="base_price"
                onChangeText={handleChange('base_price')}
                onBlur={handleBlur('base_price')}
                error={touched.base_price && errors.base_price}
                value={values.base_price}
                type="number-pad"
              />
              {touched.base_price && errors.base_price && (
              <HelperText text={errors.base_price} />
              )}

              <Text style={styles.inputLabel}>Kategori</Text>
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
                placeholder="Pilih kategori"
                error={touched.category_ids && errors.category_ids}
              />
              { touched.category_ids && errors.category_ids && (
              <HelperText text={errors.category_ids} />
              )}

              <Text style={styles.inputLabel}>Deskripsi</Text>
              <InputText
                name="description"
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                error={touched.description && errors.description}
                value={values.description}
                placeholder="Contoh: Jalan Ikan Hiu 33"
                style={{ textAlignVertical: 'top', height: 80 }}
              />
              { touched.description && errors.description && (
              <HelperText text={errors.description} />
              )}
              <Text style={styles.inputLabel}>Foto Produk</Text>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <PhotoProfile
                  style={{
                    width: 96,
                    height: 96,
                    backgroundColor: neutral1,
                    borderStyle: 'dashed',
                    borderColor: neutral2,
                    borderWidth: 2,
                    marginRight: 28,
                    marginTop: -24,
                    marginBottom: -12,
                  }}
                  icon="plus"
                  colorIcon={neutral2}
                />
              </View>
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between', marginTop: 24,
              }}
              >
                <View style={{
                  flex: 1,
                  marginRight: 8,
                  borderColor: neutral5,
                  borderWidth: 2,
                  borderRadius: 12,
                }}
                >
                  <CustomButton
                    onPress={handleSubmit}
                    title="Preview"
                    buttonStyle={{ backgroundColor: neutral1, borderColor: primaryPurple4, borderWidth: 2 }}
                    textStyle={{ color: neutral5 }}
                //     enabled={isValid && !errors.name
                //   && !errors.city && !errors.address && !errors.phone_number}
                  />

                </View>
                <View style={{ flex: 1, marginLeft: 8 }}>
                  <CustomButton
                    onPress={handleSubmit}
                    title="Simpan"
                    enabled={isValid && !errors.name
                  && !errors.city && !errors.address && !errors.phone_number}
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
    fontFamily: 'Poppins-Regular', fontSize: 14, color: neutral5, marginTop: 16,
  },
});
