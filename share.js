
function show(){
    $("#cshow_btn").click(function(){
        $("#cshow_con").css("display","block")
    });
    $("#cshow_cls").click(function(){
        $("#cshow_con").css("display","none")
    });
}

function shareTo(types) {
    var title,url,imageUrl;
    title=document.title
    url=window.location.href
    //qq空间接口的传参
    if(types=='zone'){
            window.open('https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+url+'&sharesource=qzone&title='+title+'&desc='+title+'&pics='+imageUrl);//+'&summary='+description);
    }
    // 新浪微博接口的传参
    if (types == 'sina') {
            window.open('http://service.weibo.com/share/share.php?url=' + url + '&sharesource=weibo&title=' + title);// + '&pic=' + imageUrl + '&appkey=2706825840');
    }
    // qq好友接口的传参
    if (types == 'qq') {
            window.open('http://connect.qq.com/widget/shareqq/index.html?url=' + url + '&sharesource=qzone&title=' + title);// + '&pics=' + imageUrl + '&summary=' + description + '&d描分享
    
    }        
    if(types=='wechat'){
        window.open('https://zixuephp.net/inc/qrcode_img.php')
    }
}
