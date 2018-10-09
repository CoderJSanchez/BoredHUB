var addFive = 15;
var youTubeAPI = 'https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=US&maxResults=' +
addFive
+'&key=AIzaSyCvAof6vnksRm0H8YC_dL2i3VLhr3cfU48';
var giphyAPI = "https://api.giphy.com/v1/gifs/trending?api_key=fDL5v4XFp5pWQ4sKnSa55JNFVuzF0LSq&limit=" + addFive;


function callYT(){
    $.ajax({
        url: youTubeAPI,
        method: 'GET'
    }).then(function(response){
        console.log(response);
        // var firstVid = response.items[0].id;
        // console.log(firstVid);
    
        for (let i = 0; i < response.items.length; i++){
            var makeiFrame = $('<iframe>');
            makeiFrame.addClass('col-sm-12 col-md-2');
            makeiFrame.attr('width', '100%');
            makeiFrame.attr('height', 'auto');
            makeiFrame.attr('src', 'https://www.youtube.com/embed/' + response.items[i].id);
            makeiFrame.attr('frameborder', '0');
            makeiFrame.attr('allow', 'autoplay');
            makeiFrame.attr("allowfullscreen");
            $('#player').append(makeiFrame);
    
        }
    
    })
}

function callGiphy() {
    $.ajax({
        url: giphyAPI,
        method: 'GET'
    }).then(function(response) {
        for(let i = 0; i < response.data.length; i++) {
            let image = $("<img>");
            $(image).attr("src", response.data[i].images.fixed_height.url);
            $(image).attr("alt", "Hilarious GIF!");
            $("#giphyArea").append(image);
        }
    });
}

callYT();
callGiphy();






