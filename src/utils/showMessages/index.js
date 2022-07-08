import { showMessage } from 'react-native-flash-message';
import { COLORS } from '../../constant';

export function showSuccess(message) {
  showMessage({
    message,
    type: 'success',
    color: COLORS.white,
    icon: 'success',
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
