import { COLORS } from "../../constant";
import { showMessage, hideMessage } from "react-native-flash-message";

export function showSuccess(message) {
    showMessage({
      message: message,
      type: 'success',
      color: COLORS.white,
      icon: 'success'
    })
  }
  
  export function showDanger (message) {
    showMessage({
      message,
      type: 'danger',
      color: COLORS.alertDanger,
      icon: 'danger'
    })
  }
  
  export function showInfo (message) {
    showMessage({
      message,
      type: 'info',
      color: COLORS.white,
      icon: 'info'
    })
  }
  
  export const showWarning = (message) => {
    showMessage({
      message,
      type: 'warning',
      color: COLORS.alertWarning,
      icon: 'warning'
    })
  }