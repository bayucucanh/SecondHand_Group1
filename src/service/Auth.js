import Storage from '../utils/Storage';

async function getAccount() {
  return Storage.get('account');
}

async function setAccount(data) {
  return Storage.set('account', data);
}

async function logout() {
  return Storage.clear('account');
}

export default {
  logout,
  getAccount,
  setAccount,
};
