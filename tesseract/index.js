var Tesseract = require('tesseract.js');

function TesseractInit(res) {
    ocr(function(text){
        res.send(text);
    })
}

function ocr(onSuccess) {
    var img = 'https://tesseract.projectnaptha.com/img/eng_bw.png';
    Tesseract.recognize(
        img,
        'eng',
        { logger: m => console.log(m) }
    )
    .then(({ data: { text } }) => {
        onSuccess(text);
    });
}

module.exports = {
    TesseractInit
}