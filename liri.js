// At the top of the `liri.js` file, add code to read and set any environment variables with the dotenv package:
require("dotenv").config();

// Add the code required to import the `keys.js` file and store it in a variable.
var keys = require("./keys.js");

// Varialbes that equals an argument
var catchACase = process.argv[2];
var value = process.argv[3];

// Switch Statement so JavaScript knows which case
switch (catchACase) {
    case "concert-this":
    concertThis()
    break;
    case "spotify-this-song":
    spotifyThisSong()
    break;
    case "movie-this":
    movieThis()
    break;
    case "do-what-it-says":
    doWhatItSays()
    break;        
}

// "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`
// Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")
function concertThis() {
    console.log("This works!");
}


// `node liri.js spotify-this-song '<song name here>'`
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
function spotifyThisSong() {
    var Spotify = require('node-spotify-api');

    // You should then be able to access your keys information like so
    var spotify = new Spotify(keys.spotify);

    spotify.search({ type: 'track', query: 'I Want It That Way' }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        console.log(data); 
    });
}


 
// Title of the movie.
// Year the movie came out.
// IMDB Rating of the movie.
// Rotten Tomatoes Rating of the movie.
// Country where the movie was produced.
// Language of the movie.
// Plot of the movie.
// Actors in the movie.
// http://www.omdbapi.com/?apikey=[yourkey]&
function movieThis() {
    // Basic Node application for requesting data from the OMDB website via axios
    // Here we incorporate the "axios" npm package
    var axios = require("axios");
    
    // // We then run the request with axios module on a URL with a JSON
    axios.get("http://www.omdbapi.com/?apikey=2e268f65&t=" + value)
    .then(
        function(response) {
            // Then we print out the imdbRating
            console.log(response.title);
            console.log(response.year);
            console.log(response.ratings.imdbRating);
            console.log(response.country);
            console.log(response.language);
            console.log(response.plot);
            console.log(response.actors);
        }
        .catch(function(error) {
            if (error.response) {
                console.log(error.response.title);
                console.log(error.response.year);
                console.log(error.response.ratings.imdbRating);
                console.log(error.response.country);
                console.log(error.response.language);
                console.log(error.response.plot);
                console.log(error.response.actors);
            }
        })
    );
}


// // Includes the FS package for reading and writing packages
function doWhatItSays() {
    var fs = require("fs");

    // Running the readFile module that's inside of fs.
    // Stores the read information into the variable "data"
    fs.readFile("random.txt", text, function(err, data) {
        if (err) {
        return console.log(err);
    }
    // Break the string down by comma separation and store the contents into the output array.
    var output = data.split(",");
  
    // Loop Through the newly created output array
    for (var i = 0; i < output.length; i++) {
  
      // Print each element (item) of the array/
      console.log(output[i]);
    }
  });
}


