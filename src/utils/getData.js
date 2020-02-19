// eslint-disable-next-line no-return-assign
module.exports = url => fetch(url)
  .then(res => res.json())
  .then(json => json)
  .catch(e => e);

