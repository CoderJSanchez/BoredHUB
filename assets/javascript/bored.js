var addFive = 15;
var youTubeAPI = 'https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=US&maxResults=' +
addFive
+'&key=AIzaSyCvAof6vnksRm0H8YC_dL2i3VLhr3cfU48';


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

callYT();






