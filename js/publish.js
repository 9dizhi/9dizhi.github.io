var emails = [
    '3dizhi@gmail.com'
];
var newestUrls = [
    'https://02be.xyz',
    'https://k071.xyz',
    'https://z35.xyz',
];
var otherUrls = [
    'https://3dizhi.github.io/',
    'https://july50.com',
];
var foreverUrls = [
    'https://julyporn.com',
    'https://www.julyporn.com',
];
var notices = [
    '* 我們推薦PC和Andriod手機用戶使用Chrome(谷歌)瀏覽器訪問，iPhone用戶我們建立您使用手機自帶Safria瀏覽器訪問。',
    '* 為了防止域名劫持而無法訪問，請設置手機和PC的DNS，我們推薦使用8.8.8.8和1.1.1.1。',
    '* 大陸地區用戶我們建議您可以使用VPN或者代理的方式來訪問我們的永久地址。',
];

function createFieldElem(option) {
    var title = option.title;
    var items = option.items;
    var plainText = option.plainText;
    var classStr = option.classStr;
    var text = option.text;

    var fieldElem = document.createElement('div');
    var fieldClass = ['field', classStr].join(' ');
    fieldElem.setAttribute('class', fieldClass);

    var titleElem = document.createElement('h4');
    titleElem.setAttribute('class', 'title');
    titleElem.innerHTML = title;
    fieldElem.appendChild(titleElem);

    var ulElem = document.createElement('ul');
    var htmlStr = ''
    for (var i = 0; i < items.length; i++) {
        if (plainText) {
            htmlStr = htmlStr + '<li>' + items[i] + '</li>';
        } else {
            htmlStr = htmlStr + '<li><a href="' + items[i] + '" target="_blank">' + items[i] + '</a></li>';
        }
    }

    // For text
    if (text) {
        htmlStr = htmlStr + '<li class="text">' + text + '</li>';
    }

    ulElem.innerHTML = htmlStr;
    fieldElem.appendChild(ulElem);
    return fieldElem;
}

window.onload = function () {
    var mainElem = document.getElementById('main');
    // append logo
    var logoElem = document.createElement('div');
    logoElem.setAttribute('class', 'brand');
    logoElem.setAttribute('id', 'logo');
    logoElem.innerHTML = 'JULY <span>PORN</span><span class="flag">七色</span>'
    mainElem.appendChild(logoElem);

    // newest urls
    var newestFieldElem = createFieldElem({title: '最新地址', items: newestUrls, text: '請使用https://協議訪問JULYPORN'});
    mainElem.appendChild(newestFieldElem);

    // other urls
    var otherFieldElem = createFieldElem({title: '收藏地址發布頁面', items: otherUrls});
    mainElem.appendChild(otherFieldElem);

    // email
    var mailFieldElem = createFieldElem({title: '發送郵件獲得', items: emails, plainText: true});
    mainElem.appendChild(mailFieldElem);

    // forever urls
    var foreverFieldElem = createFieldElem({title: '永久地址', items: foreverUrls});
    mainElem.appendChild(foreverFieldElem);

    // Description
    var noticeFieldElem = createFieldElem({title: '注意事項', items: notices, plainText: true, classStr: 'desc'});
    mainElem.appendChild(noticeFieldElem);
}
