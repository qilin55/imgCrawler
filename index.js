const request = require('request');
const path = require('path');
const config = require('./config');
const analyze = require('./analyze');

function start() {
    request(config.url, function (err, res, body) {
        console.info('******----start---******');
        if(!err && res) {
            console.info('******----really start---******');
            analyze.findImg(body, downLoad);
        }
        if(err) {
            console.info('******----err---******',err)
        }
    })
}

function downLoad(imgUrl, i) {
    let ext = imgUrl.split('.').pop();
    console.info('******----imgUrl---******',imgUrl)
    console.info('******----ext---******',ext)
    // request(imgUrl).pipe(fs.createReadStream(path.join(config.imgDir, i + '.' + ext), {
    //     'encoding': 'utf8'
    // }))
    console.info('******----i---******',i)
}

start();