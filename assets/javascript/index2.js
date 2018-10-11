var addFive = 15;
var youTubeAPI = 'https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=US&maxResults=' +
addFive
+'&key=AIzaSyCvAof6vnksRm0H8YC_dL2i3VLhr3cfU48';
var giphyAPI = "https://api.giphy.com/v1/gifs/trending?api_key=fDL5v4XFp5pWQ4sKnSa55JNFVuzF0LSq&limit=" + addFive;
var index = 0;

function YTinit() {
    $.ajax({
        url: youTubeAPI,
        method: 'GET'
    }).then(function(response){
        var firstSlide = YTresults(response);
        index += 5;
        $(firstSlide).attr("class", "videos");    

        $("#player").append(firstSlide);
    });
}

function YTnext() {

}

function YTresults(response) {
    var videos = $("<div>");
    for(let i = index; i < (index + 5); i++){
        var makeiFrame = $('<iframe>');
        makeiFrame.addClass('col-sm-12 col-md-2');
        makeiFrame.attr('width', '100%');
        makeiFrame.attr('height', 'auto');
        makeiFrame.attr('src', 'https://www.youtube.com/embed/' + response.items[i].id);
        makeiFrame.attr('frameborder', '0');
        makeiFrame.attr('allow', 'autoplay; encrypted-media');
        makeiFrame.attr("allowfullscreen", true );
        $(videos).append(makeiFrame);
    }

    return videos;
}

YTinit();