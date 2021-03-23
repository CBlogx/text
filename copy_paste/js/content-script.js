
chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action === "copy")
        {
            // alert(typeof($("#addr").text()))
            
            var data={"addr":"","title":"","content":""} 
            // for(var key in data){
            //     var kid=$("#"+key)
            //     if(kid.val()!=""&&kid.val()!=kid.text())
            //     {
            //         console.log("keyname:"+key);
            //         console.log("value:"+kid.val());
            //         console.log("text:"+kid.text());
            //         data[key]=kid.val()
            //     }
            //     else{
            //         console.log("text:"+key);
            //         data[key]=kid.text()
            //     }
            //     console.log(data[key]);
            // }
            data["addr"]=$("#addr").val()
            data["title"]=$("#title").val()
            data["content"]=$("#content").text()  
                if (sendResponse) sendResponse(JSON.stringify(data));
            
            else 
            {
                alert("No data");
            }
        } 
        else if (request.action === "paste") 
        {

            var data=JSON.parse(request.data)
            for(var key in data){
                var kid=$("#"+key)
                
                kid.val(data[key])
                if(kid.val()!=0){
                    kid.text(data[key])
                }
                sendResponse("OK");
            }
        }
        return true;
    }
);
