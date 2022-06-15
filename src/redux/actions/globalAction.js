import {LOADING, REFRESH, LOGOUT} from '../types';

export const setLoading = value => ({
  type: LOADING,
  payload: value,
});

export const setRefresh = value => ({
  type: REFRESH,
  payload: value,
});

export const logout = () => ({
  type: LOGOUT,
});
