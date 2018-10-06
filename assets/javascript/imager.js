var imager = {
    apis: {
        giphy: {
            apikey: "fDL5v4XFp5pWQ4sKnSa55JNFVuzF0LSq",
            url: "https://api.giphy.com/v1/gifs/trending"
        },
        imgur: {
            access_token: "21f9706c77e8c26362491edb4c2d60f157cdb8f8",
            settings: {
                "async": true,
                "crossDomain": true,
                "url": "https://api.imgur.com/3/gallery/hot",
                "method": "GET",
                "headers": {
                    "Authorization": "Client-ID e5002aa5a1de269"
                }
            }
        }
    },
    index: 0,
    giphyResponse: [],
    imgurResponse: [],
    query: function() {
        $.ajax({
            url: imager.apis.giphy.url + "?api_key=" + imager.apis.giphy.apikey + "&limit=60",
            method: "GET"
        }).then(function(response) {
            console.log("Giphy Response:");
            console.log(response);
        });

        $.ajax(imager.apis.imgur.settings).done(function(response) {
            console.log("Imgur Response:");
            console.log(response);
        });
    }
}

imager.query();