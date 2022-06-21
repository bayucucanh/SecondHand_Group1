import {
  Text, TextInput, View, StyleSheet, ScrollView, StatusBar, FlatList, LogBox,
} from 'react-native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { RectButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import {
  alertDanger, neutral1, neutral3, neutral4, neutral5, primaryPurple1, primaryPurple4,
} from '../../constant/color';
import { IconButton, ProductCard, SearchBar } from '../../components';
import FocusAwareStatusBar from '../../utils/focusAwareStatusBar';
import { getDataProfile, getDataProduct } from '../../redux/actions';

function Home() {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.login.userData.access_token);
  const dataProduct = useSelector((state) => state.home.dataProduct);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    dispatch(getDataProfile(accessToken));
    dispatch(getDataProduct());
  }, []);

  return (
    <ScrollView style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" color="#FFE9C9" />
      <LinearGradient
        colors={['#FFE9C9', '#FFFFFF']}
        locations={[0.6, 1]}
      >
        <SearchBar />
        <View style={{
          flexDirection: 'row', marginVertical: 32, paddingHorizontal: 24,
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
        <View style={{ marginHorizontal: 24 }}>
          <Text style={{
            fontFamily: 'Poppins-Medium', fontSize: 16, color: neutral5,
          }}
          >
            Telusuri Kategori
          </Text>
          <ScrollView
            style={{ flexDirection: 'row', marginVertical: 16 }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <IconButton icon="search" text="Semua" active />
            <IconButton icon="anchor" text="Hobi" active={false} />
            <IconButton icon="truck" text="Kendaraan" active={false} />
          </ScrollView>
        </View>
      </LinearGradient>
      <View style={{
        marginTop: 16,
        marginHorizontal: 24,
        marginBottom: 38,
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
      >
        <FlatList
          data={dataProduct}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id + index.toString()}
          renderItem={({ item }) => <ProductCard name={item.name} categories="Aksesoris" basePrice={item.base_price} imageUrl={item.image_url} />}
        />
        {/* <ProductCard name="Jam Tangan Casio" categories="Aksesoris" basePrice="250000" imageUrl="https://picsum.photos/140/100" />
        <ProductCard name="Jam Tangan Casio" categories="Aksesoris" basePrice="250000" imageUrl="https://picsum.photos/140/100" /> */}
      </View>
      {/* <Text style={{ fontFamily: 'Poppins-Bold' }}>Home</Text> */}
      {/* <Button title="logout" onPress={onLogout} /> */}
      <View />
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: neutral1,
  },
});
