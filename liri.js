require("dotenv").config();

const keys = require("./keys.js");
const Spotify = require("node-spotify-api");
const axios = require("axios");
const moment = require("moment");
const fs = require('fs');


let spotify = new Spotify(keys.spotify);

let choice = process.argv[2]
let value = process.argv.slice(3).join(" ");

function concertThis(test) {
    axios.get("https://rest.bandsintown.com/artists/"+test+"/events?app_id=codingbootcamp").then(
    function(response) {
    console.log(value)
    console.log("-------------------------------------------------------------")
    for (let i=0;i<5;i++){
        console.log(response.data[i].venue.name)
        console.log(response.data[i].venue.city)
        console.log(moment(response.data[i].datetime).format('MM/DD/YYYY'))
        console.log("-------------------------------------------------------------")
    };
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });

}


function spotifyThis(test) {

    spotify
    .search({ type: 'track', query: test , limit: 5 })
    .then(function(response) {
     
    console.log("-------------------------------------------------------------")

      for (let i=0;i<5;i++) {
          console.log(response.tracks.items[i].artists[0].name)
          console.log(response.tracks.items[i].name)
          console.log(response.tracks.items[i].preview_url)
          console.log(response.tracks.items[i].album.name)
          console.log("-------------------------------------------------------------")
      }
    })
    .catch(function(err) {
      console.log(err);
    });
}

function movieThis(test) {
        axios.get("http://www.omdbapi.com/?t=" +test+ "&y=&plot=short&apikey=trilogy").then(
            function (response) {

                
                    console.log(response.data.Title)
                    console.log(response.data.Year)
                    console.log(response.data.imdbRating)
                    console.log(response.data.Ratings[1].Value)
                    console.log(response.data.Country)
                    console.log(response.data.Language)
                    console.log(response.data.Plot)
                    console.log(response.data.Actors)
                    console.log("-------------------------------------------------------------")
                
            })  

            .catch(function(error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log("---------------Data---------------");
                  console.log(error.response.data);
                  console.log("---------------Status---------------");
                  console.log(error.response.status);
                  console.log("---------------Status---------------");
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an object that comes back with details pertaining to the error that occurred.
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log("Error", error.message);
                }
                console.log(error.config);
              });
    }

function thisEvaluatesMyCommand(myChoice, myValue) {
    switch(myChoice) {
        case "concert-this":
        concertThis(myValue);
        break;
    case "spotify-this":
        spotifyThis(myValue);
        break;
    case "movie-this":
        movieThis(value);
        break;
    }
}
    
    
function readRandomFileCommand(callback) {
        fs.readFile("random.txt", "utf8", function (error, response) {

        if (error) {
            return console.log(error);
        }
        
        let array = response.split(",");
        let choice = array[0]
        let value = array[1]

                callback(
                    choice,
                    value
                )
    });
}
    
if (choice === "random-this") {

    readRandomFileCommand(thisEvaluatesMyShittyCommand);

} else {
    thisEvaluatesMyCommand(choice, value);
}
    



