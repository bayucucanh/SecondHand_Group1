import Storage from "../utils/Storage";

async function getAccount() {
  return await Storage.get('account');
}

async function setAccount(data) {
  return await Storage.set('account', data);
}

async function logout() {
  return await Storage.clear('account');
}

export default {
  logout,
  getAccount,
  setAccount
};
