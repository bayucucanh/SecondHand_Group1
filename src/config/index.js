/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved

export default {
  backendApi:
    // eslint-disable-next-line no-undef
    process.env.NODE_ENV === 'production'
      && 'https://market-final-project.herokuapp.com'
};
