const cheerio = require('cheerio');

function findImg(dom, callback) {
    let $ = cheerio.load(dom);
    $('img').each(function (i, elem) {
        let imgSrc = $(this).attr('src').replace('//', '');
        if(imgSrc.indexOf('.com') != -1) {
            if(imgSrc.indexOf('http') == -1) {
                imgSrc = 'http://' + imgSrc
            }
            callback(imgSrc, i);
        }
    })
}

module.exports.findImg = findImg;