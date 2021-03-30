
chrome.extension.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action === "copy")
        {
            var data={"addr":"","title":"","content":""} 
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
