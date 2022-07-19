import { showMessage } from 'react-native-flash-message';
import { COLORS, FONTS, SIZES } from '../../constant';

export function showSuccess(message) {
  showMessage({
    message,
    type: 'success',
    color: COLORS.white,
    icon: 'success',
    duration: 1600,
    style: {
      marginTop: SIZES.padding5 * 2 + 6,
      marginHorizontal: SIZES.padding5,
      borderRadius: SIZES.radius2,
      padding: SIZES.padding3,
      paddingRight: SIZES.padding6,
    },
    titleStyle: {
      ...FONTS.bodyLargeMedium,
      marginTop: 3,
    },
  });
}

export function showDanger(message) {
  showMessage({
    message,
    type: 'danger',
    color: COLORS.white,
    icon: 'danger',
    duration: 1600,
    style: {
      marginTop: SIZES.padding5 * 2 + 6,
      marginHorizontal: SIZES.padding5,
      borderRadius: SIZES.radius2,
      padding: SIZES.padding3,
      paddingRight: SIZES.padding6,
    },
    titleStyle: {
      ...FONTS.bodyLargeMedium,
      marginTop: 3,
    },
  });
}

export function showInfo(message) {
  showMessage({
    message,
    type: 'info',
    color: COLORS.white,
    icon: 'info',
    duration: 1600,
    style: {
      marginTop: SIZES.padding5 * 2 + 6,
      marginHorizontal: SIZES.padding5,
      borderRadius: SIZES.radius2,
      padding: SIZES.padding3,
      paddingRight: SIZES.padding6,
    },
    titleStyle: {
      ...FONTS.bodyLargeMedium,
      marginTop: 3,
    },
  });
}

export const showWarning = (message) => {
  showMessage({
    message,
    type: 'warning',
    color: COLORS.white,
    icon: 'warning',
    duration: 1600,
    style: {
      marginTop: SIZES.padding5 * 2 + 6,
      marginHorizontal: SIZES.padding5,
      borderRadius: SIZES.radius2,
      padding: SIZES.padding3,
      paddingRight: SIZES.padding6,
    },
    titleStyle: {
      ...FONTS.bodyLargeMedium,
      marginTop: 3,
    },
  });
};
