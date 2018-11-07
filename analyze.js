const cheerio = require('cheerio');

function findImg(dom, callback) {
    let $ = cheerio.load(dom);
    $('img').each(function (i, elem) {
        let imgSrc = $(this).attr('src').replace('//', '');
        if(imgSrc.indexOf('.com') != -1) {
        console.info('******----imgSrc---******',imgSrc)
            callback(imgSrc, i);
        }
    })
}

module.exports.findImg = findImg;