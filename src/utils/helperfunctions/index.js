import analytics from '@react-native-firebase/analytics';

export const onLogScreenView = async (screenName) => {
  try {
    return await analytics().logScreenView({
      screen_name: screenName,
      screen_class: screenName,
    });
  } catch (e) {
    return null;
  }
};

export default onLogScreenView;
