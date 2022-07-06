import Storage from '../utils/Storage';

async function getLanguage() {
  return Storage.get('language');
}

async function setLanguage(data) {
  return Storage.set('language', data);
}

export default {
  getLanguage,
  setLanguage,
};
