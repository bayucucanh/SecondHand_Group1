import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { AnimSuccess } from '../../../assets/index';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../../constant';
import { CustomButton } from '../../../components'

const Success = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ flex: 3, marginTop: 60 }}>
        <LottieView source={AnimSuccess} autoPlay={true} loop={false} />
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 25 }}>
        <CustomButton title={"Continue"} onPress={() => navigation.replace('Login')} enabled={true} />
      </View>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 25,
  },
});
