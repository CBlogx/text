

function shareTo(types) {
    var title,url,imageUrl ,description, keywords;
    title=document.title
    url=window.location.href
    console.log(title)
    console.log(url)
    //获取文章标题
//     keywords = document.querySelector('meta[name="keywords"]').getAttribute('content');
//     description = document.querySelector('meta[name="description"]').getAttribute('content');

    if(typeof imageUrl == 'undefined'){
        imageUrl = 'https://'+window.location.host+'/favicon.ico';
    } else {
        imageUrl = imageUrl.src;
    }
//     console.log(keywords);
//     console.log(description)
  console.log(imageUrl)
//     //qq空间接口的传参
//     if(types=='zone'){
//         alert("1");
//             //window.open('https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey')
//             //url='+url+'&sharesource=qzone&title='+title+'&desc='+title+'&pics='+icourl+'&pics='+imageUrl+'&summary='+description);
//     }
//     // 新浪微博接口的传参
//     if (types == 'sina') {
//             window.open('http://service.weibo.com/share/share.php')
//             //url=' + url + '&sharesource=weibo&title=' + title)// + '&pic=' + imageUrl + '&appkey=2706825840');
//     }
//     // qq好友接口的传参
//     if (types == 'qq') {
//             window.open('http://connect.qq.com/widget/shareqq/index.html?')
//             //url=' + url)// + '&sharesource=qzone&title=' + title)// + '&pics=' + imageUrl + '&summary=' + description + '&d描分享
//     if (types == 'wechat') {
//             window.open('https://zixuephp.net/inc/qrcode_img.php')
//             //?url=' + url);
//     }
}