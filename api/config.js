// import dotenv from 'dotenv';
// const dotenv = require('dotenv');
const config_result = require('dotenv').config();
console.log('config_result', config_result);
if (config_result.error) {
  throw config_result.error;
}
// import "core-js/stable";
// import "regenerator-runtime/runtime";

// export default dotenv;
module.exports = dotenv;