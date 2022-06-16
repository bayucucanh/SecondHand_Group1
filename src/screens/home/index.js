import {
  Text, TextInput, View, StyleSheet,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { RectButton } from 'react-native-gesture-handler';
import {
  alertDanger, neutral1, neutral3, neutral4, neutral5, primaryPurple1, primaryPurple4,
} from '../../constant/color';

function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={{
            fontFamily: 'Poppins-Regular', fontSize: 14, width: '90%', alignItems: 'baseline',
          }}
          placeholder="Cari di Second Chance"
        />
        <Icon name="search" color={neutral3} size={24} style={{ position: 'absolute', right: 24 }} />
      </View>
      <View style={{
        flexDirection: 'row', marginVertical: 32,
      }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{
            fontFamily: 'Poppins-Bold', fontSize: 20, color: 'black',
          }}
          >
            Bulan Ramadhan Banyak diskon!
          </Text>
          <Text style={{
            fontFamily: 'Poppins-Regular', fontSize: 14, color: neutral5, marginTop: 12,
          }}
          >
            Diskon Hingga
          </Text>
          <Text style={{
            fontFamily: 'Poppins-Medium', fontSize: 18, color: alertDanger,
          }}
          >
            60%
          </Text>
        </View>
        <View style={{
          backgroundColor: 'blue', width: 127, height: 127,
        }}
        />
      </View>
      <View>
        <Text style={{
          fontFamily: 'Poppins-Medium', fontSize: 16, color: neutral5,
        }}
        >
          Telusuri Kategori
        </Text>
        <View style={{ flexDirection: 'row', marginVertical: 16 }}>
          <RectButton style={styles.btnCategoryActive}>
            <Icon name="search" color={neutral1} size={20} />
            <Text style={styles.btnTextActive}>
              Semua
            </Text>
          </RectButton>
          <RectButton style={styles.btnCategory}>
            <Icon name="search" color={neutral4} size={20} />
            <Text style={styles.btnText}>
              Hobi
            </Text>
          </RectButton>
          <RectButton style={styles.btnCategory}>
            <Icon name="search" color={neutral4} size={20} />
            <Text style={styles.btnText}>
              Kendaraan
            </Text>
          </RectButton>
          <RectButton style={styles.btnCategory}>
            <Icon name="search" color={neutral4} size={20} />
            <Text style={styles.btnText}>
              Kendaraan
            </Text>
          </RectButton>
        </View>
      </View>
      <View style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'space-around' }}>
        <View style={{ borderRadius: 8, padding: 12, backgroundColor: neutral1 }}>
          <View style={{
            width: 140, height: 100, backgroundColor: 'yellow', borderRadius: 8,
          }}
          />
          <Text style={{
            fontFamily: 'Poppins-Regular', fontSize: 14, marginTop: 8, color: neutral5,
          }}
          >
            Jam Tangan Casio
          </Text>
          <Text style={{
            fontFamily: 'Poppins-Regular', fontSize: 10, color: neutral3,
          }}
          >
            Aksesoris
          </Text>
          <Text style={{
            fontFamily: 'Poppins-Regular', fontSize: 14, marginVertical: 8, color: neutral5,
          }}
          >
            Rp 250.000
          </Text>
        </View>
        <View style={{ borderRadius: 8, padding: 12, backgroundColor: neutral1 }}>
          <View style={{
            width: 140, height: 100, backgroundColor: 'yellow', borderRadius: 8,
          }}
          />
          <Text style={{
            fontFamily: 'Poppins-Regular', fontSize: 14, marginTop: 8, color: neutral5,
          }}
          >
            Jam Tangan Casio
          </Text>
          <Text style={{
            fontFamily: 'Poppins-Regular', fontSize: 10, color: neutral3,
          }}
          >
            Aksesoris
          </Text>
          <Text style={{
            fontFamily: 'Poppins-Regular', fontSize: 14, marginVertical: 8, color: neutral5,
          }}
          >
            Rp 250.000
          </Text>
        </View>
      </View>
      {/* <Text style={{ fontFamily: 'Poppins-Bold' }}>Home</Text> */}
      {/* <Button title="logout" onPress={onLogout} /> */}
      <View />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1, paddingHorizontal: 24, paddingTop: 38, backgroundColor: neutral1,
  },
  searchBar: {
    backgroundColor: neutral1,
    flexDirection: 'row',
    paddingHorizontal: 24,
    alignItems: 'center',
    borderRadius: 16,
  },
  btnCategoryActive: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: primaryPurple4,
    borderRadius: 12,
    marginRight: 16,
  },
  btnCategory: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: primaryPurple1,
    borderRadius: 12,
    marginRight: 16,
  },
  btnTextActive: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: neutral1,
    marginLeft: 8,
    textAlignVertical: 'center',
  },
  btnText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: neutral4,
    marginLeft: 8,
    textAlignVertical: 'center',
  },
});
