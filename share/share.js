
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
    if(types=='zone'){window.open('https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+url+'&sharesource=qzone&title='+title+'&desc='+title+'&pics='+imageUrl);}//+'&summary='+description);}
    // 新浪微博接口的传参
    if (types == 'sina') {window.open('http://service.weibo.com/share/share.php?url=' + url + '&sharesource=weibo&title=' + title);}
    // qq好友接口的传参
    if (types == 'qq') {
        // qqurl="http://connect.qq.com/widget/shareqq/index.html?url="+url;
        // if($("#qq_qr").length>0){
        //     $("#qq_qr").css({display:"block"})
        // }
        // else{
        //     set_qr("qq_qr",qqurl,"扫码分享")
        // }
    window.open('http://connect.qq.com/widget/shareqq/index.html?url=' + url );
    // 微信好友传参    
    }        
    if(types=='wechat'){
        weurl="https://zixuephp.net/inc/qrcode_img.php?url="+url;
        if($("#wechat_qr").length>0){
            $("#wechat_qr").css({display:"block"})
        }
        else{
            set_qr("wechat_qr",weurl,"扫码分享至微信好友")
        }
        // window.open()
    }
}


function set_qr(id,url,stat){
    var div = document.createElement("div"),span=document.createElement("span"),img = document.createElement("img"),i =document.createElement("i");
    div.id = id;
    img.id = "qr_img";
    span.id= "qr_span";
    i.id="qr_cls";
    i.className="fa fa-times fa-2x"
    span.innerHTML=stat;
    $("body").append(div);
    $(div).append(img,span,i)
    img.width=250
    img.src = url;
    $(div).css({display: "block",position: "absolute",width: "300px",height: "400px","margin-left": "40%",top: "30%","background-color": "whitesmoke","z-index":"99"});
    $(img).css({display:"block",position:"absolute",left:"26px",top:"125px"});
    $(span).css({display:"block",position:"absolute","font-size":"25px","text-align":"center","margin-top":"80px","margin-left":"40px"});
    $(i).css({display:"block",position:"absolute",right:"0",});
    $(i).click(function(){$(div).css({display:"none"})});
}

function set_margin(id,top,left){
    $("#"+id).css({
        "margin-top":top+"px",
        "margin-left":left+"px"
    });
}