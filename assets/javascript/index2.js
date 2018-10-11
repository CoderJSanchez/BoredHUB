var addFive = 5;
var youTubeAPI = 'https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=US&maxResults=' +
addFive
+'&key=AIzaSyCvAof6vnksRm0H8YC_dL2i3VLhr3cfU48';
var youTubeAPINext = youTubeAPI;
var youTubeAPIPrev = youTubeAPI;
var giphyAPI = "https://api.giphy.com/v1/gifs/trending?api_key=fDL5v4XFp5pWQ4sKnSa55JNFVuzF0LSq&limit=" + addFive;
var index = 0;
var nextToken = "";
var prevToken = "";
var hasPrevToken = false;

function YTinit() {
    $.ajax({
        url: youTubeAPI,
        method: 'GET'
    }).then(function(response){
        console.log(response);
        var firstSlide = YTresults(response);
        index += 5;
        $(firstSlide).attr("class", "videos");    

        $("#player").append(firstSlide);
    });
}

function YTresults(response) {
    let videos = $("<div>");
    for(let i = 0; i < 5; i++){
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
    nextToken = response.nextPageToken;
    youTubeAPInext = youTubeAPI + "&pageToken=" + nextToken;
    if(response.hasOwnPropery("prevPageToken")){
        prevToken = response.prevPageToken;
        youTubeAPIPrev = youTubeAPI + "&pageToken=" + prevToken;
        hasPrevToken = true;
    } else {
        hasPrevToken = false;
    }
    return videos;
}

function plusYTSlides() {
    $.ajax({
        url: youTubeAPInext,
        method: 'GET'
    }).then(function(response){
        console.log(response);
        var nextSlide = YTresults(response);
        $(nextSlide).attr("class", "videos");
        $("#player").empty();
        $("#player").append(nextSlide);
    });
}

function minusYTSlides() {
    if(hasPrevToken){    
        $.ajax({
            url: youTubeAPIprev,
            method: 'GET'
        }).then(function(response){
            console.log(response);
            var prevSlide = YTresults(response);
            $(prevSlide).attr("class", "videos");
            $("#player").empty();
            $("#player").append(prevSlide);
        });
    }
}

YTinit();

$("#YTnext").on("click", function() {
    plusYTSlides();
});

$("#YTprev").on("click", function() {
    minusYTSlides();
});