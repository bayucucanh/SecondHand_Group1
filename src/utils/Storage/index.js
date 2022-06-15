/* eslint-disable no-unused-vars */
import AsyncStorage from '@react-native-async-storage/async-storage';

async function get(key, defaultValue = null) {
  try {
    let value = await AsyncStorage.getItem(key);

    if (value !== null) {
      value = JSON.parse(value);
    }
    return value;
  } catch (error) {
    console.log('Could not save data: ' + key, error);
  }
}
async function set(key, value) {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log('Could not save data: ' + key, error);
  }
}
async function remove(key) {}

async function clear() {
  try {
    return await AsyncStorage.clear(() => {
      console.log('cleared');
    });
  } catch (error) {
    console.log('Could not clear data ', error);
  }
}

export default {
  get,
  set,
  clear,
  remove,
};
