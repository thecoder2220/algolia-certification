const algoliasearch = require("algoliasearch");
const client = algoliasearch("47CSD2QLER","b77f1a0f29c4243afda6282330456514");
/*const index_training_movies = client.initIndex("training_movies");
console.log("infos config of index training_movies")
var logA = "infos config of index training_movies";

index_training_movies.getSettings().then(result => console.log(logA ,result));  */
const index_carl_movies = client.initIndex("carl_movies");
//console.log("infos config of index carl_movies");
index_carl_movies.getSettings().then(resultb => console.log(resultb));
/*index_carl_movies.setSettings({
    searchableAttributes: ["title, alternative_titles", "actors", "genre", "year", ]
});  */



