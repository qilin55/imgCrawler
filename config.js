const url = 'http://image.so.com/i?q=%E6%B5%B7%E8%B4%BC%E7%8E%8B&src=srp';
const path = require('path');
const imgDir = path.join(__dirname, 'img');

module.exports.url = url;
module.exports.imgDir = imgDir;