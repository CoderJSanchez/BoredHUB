var youTubeAPI = 'https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=US&maxResults=5&key=AIzaSyCvAof6vnksRm0H8YC_dL2i3VLhr3cfU48'

$.ajax({
    url: youTubeAPI,
    method: 'GET'
}).then(function(response){
    console.log(response);
    var firstVid = response.items[0].id;
    console.log(firstVid);

    for (let i = 0; i < response.items.length; i++){
        var makeiFrame = $('<iframe>');
        makeiFrame.addClass('col-md-2');
        makeiFrame.attr('width', '570');
        makeiFrame.attr('height', '215');
        makeiFrame.attr('src', 'https://www.youtube.com/embed/' + response.items[i].id);
        makeiFrame.attr('frameborder', '0');
        makeiFrame.attr('allow', 'autoplay');
        $('#player').append(makeiFrame);

    }

//$('#trendingVideo').attr('src', 'https://www.youtube.com/embed/' + firstVid );    

})



