import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from '../utils/Storage';

const setLanguage = async (value) => {
  try {
    return await AsyncStorage.setItem('language', value);
  } catch (e) {
    return console.log(`Could not save data: ${e}`);
  }
};

const getLanguage = async () => {
  try {
    return await AsyncStorage.getItem('language');
  } catch (e) {
    return console.log(`Could not get data: ${e}`);
  }
};

export default {
  getLanguage,
  setLanguage,
};
