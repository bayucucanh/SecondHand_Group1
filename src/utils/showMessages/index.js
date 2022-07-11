import { showMessage } from 'react-native-flash-message';
import { COLORS, FONTS, SIZES } from '../../constant';

export function showSuccess(message) {
  showMessage({
    message,
    type: 'success',
    color: COLORS.white,
    icon: 'success',
    duration: 800,
    style: {
      marginTop: SIZES.padding5 * 2 + 6,
      marginHorizontal: SIZES.padding5,
      borderRadius: SIZES.radius2,
      padding: SIZES.padding3,
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
  });
}

export function showInfo(message) {
  showMessage({
    message,
    type: 'info',
    color: COLORS.white,
    icon: 'info',
  });
}

export const showWarning = (message) => {
  showMessage({
    message,
    type: 'warning',
    color: COLORS.white,
    icon: 'warning',
  });
};
