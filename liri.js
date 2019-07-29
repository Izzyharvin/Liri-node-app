// At the top of the `liri.js` file, add code to read and set any environment variables with the dotenv package:
require("dotenv").config();

// Add the code required to import the `keys.js` file and store it in a variable.
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
// Varialbes that equals an argument
var catchACase = process.argv[2];
var value = process.argv[3];
category()

// Switch Statement so JavaScript knows which case
function category() {
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
        default:
            console.log("Choose a case")
    }
}

// "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`
// Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")
function concertThis() {
    var axios = require("axios");
    console.log("this works")
    axios
        .get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp")
        .then(function (response) {
            // console.log(response.data)
            console.log(response.data.venue.name);
            console.log(response.data.venue.region);
            console.log(response.data.datetime(moment().format(MM/DD/YYYY)));
        })
        .catch(function (error) {
            if (error) {
                console.log(error);
            }
        })
}



// `node liri.js spotify-this-song '<song name here>'`
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
function spotifyThisSong() {
    var spotify = new Spotify(keys.spotify);
    spotify
        .search({ type: 'track', query: value })
        .then(function (response) {
            console.log(response.tracks.items[0]);
        })
        .catch(function (err) {
            console.log(err);
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
    axios.get("http://www.omdbapi.com/?apikey=2e268f65&y=&plot=full&t=" + value)
        .then(
            function (response) {
                // console.log(response.data)
                // Then we print out the imdbRating
                console.log("The movie title is: " + response.data.Title);
                console.log("The movie year is: " + response.data.Year);
                console.log("The movie IMDB Rating is: " + response.data.Ratings.imdbRating);
                console.log("The movie was made in: " + response.data.Country);
                console.log("The movie language was made in: " + response.data.Language);
                console.log(response.data.Plot);
                console.log("The people who acted in this movie: " + response.data.Actors);
            })
        .catch(function (error) {
            console.log(error);
        });
}


// // Includes the FS package for reading and writing packages
function doWhatItSays() {
    var fs = require("fs");

    // Running the readFile module that's inside of fs.
    // Stores the read information into the variable "data"
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        // Break the string down by comma separation and store the contents into the output array.
        console.log(data);
        var output = data.split(",");
        catchACase = output[0]
        value = output[1]
        category()
        console.log(value, catchACase)
    }
    )
}



