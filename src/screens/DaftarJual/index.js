import {
  Text, TouchableOpacity, View, StyleSheet, ScrollView,
} from 'react-native';
import React, { useState, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS, FONTS, SIZES } from '../../constant';
import { BottomSheetComponent, PhotoProfile, TextHeader } from '../../components';
import styles from '../../constant/styles';
import IconButton from '../../components/IconButton';
import Produk from './components/Produk';
import Diminati from './components/Diminati';
import Terjual from './components/Terjual';
import FocusAwareStatusBar from '../../utils/focusAwareStatusBar';
import { Avatar } from '../../assets';
import { BottomSheetSorting } from './components/BottomSheetSorting';

function DaftarJual({ navigation }) {
  const { t } = useTranslation();

  const profileData = useSelector((state) => state.profile.profileData);

  const [btnProdukActive, setBtnPodukActive] = useState(true);
  const [btnDiminatiActive, setBtnDiminatiActive] = useState(false);
  const [btnTerjualActive, setBtnTerjualActive] = useState(false);

  const [title, setTitle] = useState('');
  const [values, setValues] = useState('newest');

  const sheetRef = useRef(null);

  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  const listIconBtn = () => {
    if (title == 'produk') {
      return <Produk />;
    }
    if (title == 'diminati') {
      return <Diminati handleSnapPress={handleSnapPress} sort={values} setSort={setValues} />;
    }
    if (title == 'terjual') {
      return <Terjual />;
    }

    return <Produk />;
  };

  const produk = () => {
    setTitle('produk');
    setBtnPodukActive(true);
    setBtnTerjualActive(false);
    setBtnDiminatiActive(false);
  };

  const diminati = () => {
    setTitle('diminati');
    setBtnPodukActive(false);
    setBtnTerjualActive(false);
    setBtnDiminatiActive(true);
  };

  const terjual = () => {
    setTitle('terjual');
    setBtnPodukActive(false);
    setBtnTerjualActive(true);
    setBtnDiminatiActive(false);
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: COLORS.neutral1 }}
      >
        <View style={{
          flex: 1, paddingHorizontal: SIZES.padding5, paddingTop: SIZES.padding5, backgroundColor: COLORS.white,
        }}
        >
          <FocusAwareStatusBar barStyle="dark-content" color="white" />
          <TextHeader text={t('sellListTitle')} />
          <View style={[styles.card, {
            marginTop: SIZES.padding3, paddingHorizontal: SIZES.padding5, paddingVertical: SIZES.padding3, flexDirection: 'row', marginHorizontal: 5,
          }]}
          >
            <View style={{ justifyContent: 'center' }}>
              {profileData.image_url ? (
                <PhotoProfile disabled image={{ uri: profileData.image_url }} style={{ width: 48, height: 48 }} styleImage={{ width: 48, height: 48 }} />
              ) : (
                <View
                  style={{
                    width: 48,
                    height: 48,
                    backgroundColor: COLORS.primaryPurple1,
                    borderRadius: SIZES.radius2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}
                >
                  <Icon name="camera" color={COLORS.primaryPurple4} size={20} />
                </View>
              )}
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ paddingLeft: SIZES.padding3 }}>
                <Text style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}>
                  {profileData.full_name}
                </Text>
                <Text style={{ ...FONTS.bodyNormalRegular, color: COLORS.neutral3 }}>{profileData.city}</Text>
              </View>
              <TouchableOpacity style={stylesIn.btnEdit} onPress={() => navigation.navigate('ChangeProfile', { data: true })}>
                <Text style={{ color: COLORS.black }}>{t('edit')}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: SIZES.padding5 }}>
            <IconButton
              icon="search"
              text={t('productTitle')}
              active={btnProdukActive}
              onPress={() => produk()}
            />
            <IconButton
              icon="heart"
              text={t('interestedTitle')}
              active={btnDiminatiActive}
              onPress={() => diminati()}
            />
            <IconButton
              icon="dollar-sign"
              text={t('soldTitle')}
              active={btnTerjualActive}
              onPress={() => terjual()}
            />
          </ScrollView>
          <View style={{ flex: 1 }}>
            {
          listIconBtn()
        }
          </View>
        </View>
      </ScrollView>
      <BottomSheetComponent
        sheetRef={sheetRef}
        component={BottomSheetSorting(values, setValues, handleSnapPress)}
        type="sort"
      />
    </>
  );
}

export default DaftarJual;

const stylesIn = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 12,
  },
  judul: {
    color: COLORS.black,
    fontSize: 21,
    fontWeight: 'bold',
    paddingTop: 15,
  },
  btnEdit: {
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: COLORS.primaryPurple3,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  iconButton: {
    flexDirection: 'row',
  },
});
