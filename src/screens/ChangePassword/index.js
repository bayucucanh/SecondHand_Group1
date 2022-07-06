import {
  StyleSheet, Text, View, Dimensions, ScrollView, Switch,
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import {
  CustomButton,
  Header, HelperText, InputText, Separator, TextButton,
} from '../../components';
import {
  COLORS, FONTS, SIZES,
} from '../../constant';
import FocusAwareStatusBar from '../../utils/focusAwareStatusBar';
import Language from '../../service/Language';
import { changePasswordSchema } from '../../utils';
import { putChangePassword } from '../../redux/actions/putChangePassword';

function ChangePassword() {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  const accessToken = useSelector((state) => state.login.userData.access_token);
  const dispatch = useDispatch();
  const onUpdate = async (values) => {
    const formdata = new FormData();
    formdata.append('current_password', values.current_password);
    formdata.append('new_password', values.new_password);
    formdata.append('confirm_password', values.confirm_password);
    await dispatch(putChangePassword(accessToken, formdata));
  };
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
        <Header title={t('ChangePasswordTitle')} />

        <Formik
          validationSchema={changePasswordSchema}
          initialValues={{
            current_password: '',
            new_password: '',
            confirm_password: '',
          }}
          onSubmit={(values) => onUpdate(values)}
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
              <Text style={styles.inputLabel}>{t('currentPassword')}</Text>
              <InputText
                placeholder={t('currentPasswordPlaceholder')}
                name="current_password"
                onChangeText={handleChange('current_password')}
                onBlur={handleBlur('current_password')}
                error={touched.current_password && errors.current_password}
                value={values.current_password}
              />
              {touched.current_password && errors.current_password && (
              <HelperText text={t(errors.current_password)} />
              )}
              <Text style={styles.inputLabel}>{t('newPassword')}</Text>
              <InputText
                placeholder={t('newPasswordPlaceholder')}
                name="new_password"
                onChangeText={handleChange('new_password')}
                onBlur={handleBlur('new_password')}
                error={touched.new_password && errors.new_password}
                value={values.new_password}
              />
              {touched.new_password && errors.new_password && (
              <HelperText text={t(errors.new_password)} />
              )}
              <Text style={styles.inputLabel}>{t('confirmPassword')}</Text>
              <InputText
                placeholder={t('confirmPasswordPlaceholder')}
                name="confirm_password"
                onChangeText={handleChange('confirm_password')}
                onBlur={handleBlur('confirm_password')}
                error={touched.confirm_password && errors.confirm_password}
                value={values.confirm_password}
              />
              {touched.confirm_password && errors.confirm_password && (
              <HelperText text={t(errors.confirm_password)} />
              )}
              <CustomButton
                onPress={handleSubmit}
                title={t('changePasswordButton')}
                buttonStyle={{ marginTop: SIZES.padding5 }}
                enabled={isValid && !errors.current_password
                  && !errors.new_password && !errors.confirm_password}
              />
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
}

export default ChangePassword;

const styles = StyleSheet.create({
  inputLabel: {
    marginLeft: 3,
    ...FONTS.bodyNormalRegular,
    color: COLORS.neutral5,
    marginTop: SIZES.padding3,
  },
});
