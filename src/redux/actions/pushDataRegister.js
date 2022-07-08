import { REGISTER_SUCCESS, REGISTER_FAILED } from '../types';
import { register } from '../../service/Api/auth';
import { setLoading } from './globalAction';
import { showDanger } from '../../utils';

export const successRegister = (value) => ({
  type: REGISTER_SUCCESS,
  payload: value,
});

export const failedRegister = () => ({
  type: REGISTER_FAILED,
});

export const checkRegister = (payload, navigation) => async (dispatch) => {
  dispatch(setLoading(true));
  await register(payload)
    .then(() => {
      dispatch(successRegister(true));
      dispatch(setLoading(false));
      console.log('Register Berhasil');
      navigation.replace('Success');
    })
    .catch((err) => {
      dispatch(failedRegister());
      dispatch(setLoading(false));
      showDanger(err.message);
      console.log(err.message);
    });
};
