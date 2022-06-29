import { Text, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { COLORS, FONTS, SIZES } from '../../constant'
import { PhotoProfile } from '../../components';
import styles from '../../constant/styles';
import IconButton from '../../components/IconButton'
import Produk from './components/Produk'
import Diminati from './components/Diminati';
import Terjual from './components/Terjual';

const DaftarJual = () => {
  const profileData = useSelector((state) => state.profile.profileData);

  const [btnProdukActive, setBtnPodukActive] = useState(true);
  const [btnDiminatiActive, setBtnDiminatiActive] = useState(false);
  const [btnTerjualActive, setBtnTerjualActive] = useState(false);

  const [title, setTitle] = useState('')

  const listIconBtn = () => {
    if (title == 'produk') {
      return <Produk />
    }
    else if (title == 'diminati') {
      return <Diminati />
    }
    else if (title == 'terjual') {
      return <Terjual />
    }
  }

  const produk = () => {
    setTitle('produk')
    setBtnPodukActive(true);
    setBtnTerjualActive(false)
    setBtnDiminatiActive(false)
  }

  const diminati = () => {
    setTitle('diminati')
    setBtnPodukActive(false);
    setBtnTerjualActive(false)
    setBtnDiminatiActive(true)
  }

  const terjual = () => {
    setTitle('terjual')
    setBtnPodukActive(false);
    setBtnTerjualActive(true)
    setBtnDiminatiActive(false)
  }

  return (
    <View style={stylesIn.container}>
      <Text style={stylesIn.judul}>Daftar Jual Saya</Text>
      <View style={[styles.card, {
        marginTop: SIZES.padding3, paddingHorizontal: SIZES.padding5, paddingVertical: SIZES.padding3, flexDirection: 'row',
      }]}
      >
        <View style={{ justifyContent: 'center' }}>
          <PhotoProfile image={{ uri: profileData.image_url }} style={{ width: 48, height: 48 }} styleImage={{ width: 48, height: 48 }} />
        </View>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ paddingLeft: SIZES.padding3 }}>
            <Text style={{ ...FONTS.bodyLargeMedium, color: COLORS.neutral5 }}>
              {profileData.full_name}
            </Text>
            <Text style={{ ...FONTS.bodyNormalRegular, color: COLORS.neutral3 }}>{profileData.city}</Text>
          </View>
          <TouchableOpacity style={stylesIn.btnEdit}>
            <Text style={{ color: COLORS.black }}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: SIZES.padding3 }}>
        <IconButton
          icon="search"
          text="Produk"
          active={btnProdukActive}
          onPress={() => produk()}
        />
        <IconButton
          icon="search"
          text="Diminati"
          active={btnDiminatiActive}
          onPress={() => diminati()}
        />
        <IconButton
          icon="search"
          text="Terjual"
          active={btnTerjualActive}
          onPress={() => terjual()} />
      </ScrollView>
      <View>
        {
          listIconBtn()
        }
      </View>
    </View >
  )
}

export default DaftarJual


const stylesIn = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 15
  },
  judul: {
    color: COLORS.black,
    fontSize: 21,
    fontWeight: "bold",
    paddingTop: 15
  },
  btnEdit: {
    alignSelf: "center",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: COLORS.primaryPurple3,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  iconButton: {
    flexDirection: "row"
  }
})