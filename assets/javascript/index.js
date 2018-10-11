var addFive = 15;
var youTubeAPI = 'https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=US&maxResults=' +
    addFive
    + '&key=AIzaSyCvAof6vnksRm0H8YC_dL2i3VLhr3cfU48';
var giphyAPI = "https://api.giphy.com/v1/gifs/trending?api_key=fDL5v4XFp5pWQ4sKnSa55JNFVuzF0LSq&limit=" + addFive;


//YouTube API call
function callYT() {
    $.ajax({
        url: youTubeAPI,
        method: 'GET'
    }).then(function (response) {
        console.log(response);

        for (let i = 0; i < response.items.length; i++) {
            var makeiFrame = $('<iframe>');
            makeiFrame.addClass('col-sm-12 col-md-2');
            makeiFrame.attr('width', '100%');
            makeiFrame.attr('height', 'auto');
            makeiFrame.attr('src', 'https://www.youtube.com/embed/' + response.items[i].id);
            makeiFrame.attr('frameborder', '0');
            makeiFrame.attr('allow', 'autoplay; encrypted-media');
            makeiFrame.attr("allowfullscreen", true);
            $('#player').append(makeiFrame);

        }

    })
}
//Giphy API call
function callGiphy() {
    $.ajax({
        url: giphyAPI,
        method: 'GET'
    }).then(function (response) {
        for (let i = 0; i < response.data.length; i++) {
            let image = $("<img>");
            $(image).attr("src", response.data[i].images.fixed_height.url);
            $(image).attr("alt", "Hilarious GIF!");
            $("#giphyArea").append(image);
        }
    });
}

var randomChuckCatagories = [
    "dev",
    "movie",
    "food",
    "celebrity",
    "science",
    "sport",
    "political",
    "religion",
    "animal",
    "history",
    "music",
    "travel",
    "career",
    "money",
];

//Random # generator to select a catagory for Chuck API
var pickRandom = randomChuckCatagories[Math.floor(Math.random() * randomChuckCatagories.length)];
console.log("this is pickrandom " + pickRandom);
var callChuckAPI = 'https://api.chucknorris.io/jokes/search?query=' + pickRandom;
//value in for loop inside chuck API call
var showTheseChucks = 4;

//Chuck Norris API call
function callChuck() {
    $.ajax({
        url: callChuckAPI,
        method: 'GET'
    }).then(function (response) {

        var chuckArray = [];
        chuckArray.push(response);
        console.log("this is the array" + chuckArray);
        
        for (var i = 0; i < showTheseChucks; i++) {
            var chucks = $('<div>');
            chucks.addClass('col-md-3');

            var chuckImg = $('<img>');
            chuckImg.addClass('img-fluid');
            chuckImg.attr('src', response.result[i].icon_url)

            var chuckWords = $('<p>');
            chuckWords.addClass('chuckLetters');
            chuckWords.text(response.result[i].value);
            chucks.append(chuckImg, chuckWords);

            $('#dropChuckSayings').append(chucks);
            //console.log(response.result[0]);
           // console.log(response.result[i].value);

        }
        $('#randomizeChucks').on('click', function () {
            // showTheseChucks += 4;
            callChuck();
        })
    
        

    });


}
callYT();
callGiphy();
callChuck();








