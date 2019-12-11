var searchYouTube = async (options, callback) => {


// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${options.max}&q=${options.query}&videoEmbeddable=true&key=${options.key}`);
const myJson = await response.json();
callback(JSON.stringify(myJson))
console.log(myJson)
console.log(JSON.stringify(myJson));
};

export default searchYouTube;
