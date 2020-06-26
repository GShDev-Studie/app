// #!/javascript
var request = require("request");


  var options = { 
	  method: 'GET',
	  url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCCWZFpSPzdbcEEI33KjaqqjwhK3EKTMC0&channelId=UCEIcoGCBHnW9E6AfRoSKBdQ&part=snippet,id&order=date&maxResults=20'
		        };

const onGET = (req, res) => {
    
    request(options, function (error, response, body) {
    if (error) throw new Error(error);
    var obj = JSON.parse(body);
    
    
    for(var c = 0 ; c < obj.items.length ; c++){
    var dataJSON =  ' "title":"'+obj.items[c].snippet.title+'",';
    }
    res.end({
    text : dataJSON,
    headers : {"content-type":"application/json"}
    });
    });
    
}
