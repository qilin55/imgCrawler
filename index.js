const request = require('request');
const config = require('./config');
const fs = require('fs');
const cheerio = require('cheerio');

let imgList = []
function start() {
    request(config.url, function (err, res, body) {
        if(!err && res) {
            let $ = cheerio.load(body);
            JSON.parse($('script[id="initData"]').html()).list.forEach(function(item){
                imgList.push(item.img)
            });
            console.log(imgList);
            for (let i = 0; i < imgList.length; i++) {
                let obj = imgList[i];
                setTimeout(function(){
                    downLoad(obj, './img/'+ (new Date()).getTime() +'.jpg');
                },400);
            }
        }
        if(err) {
            console.info('******----err---******',err)
        }
    })
}

function downLoad(src, dest) {
    request(src).pipe(fs.createWriteStream(dest)).on('close',function(){
        console.log('pic saved!')
    })
}

start();
