const express = require('express');
const router = express.Router();
const request = require("request");
const cors = require('cors');


const key = "AIzaSyB4LVIeRNaoWHhIsUN6Otyq9fjEbBM37gU";
const yelp_key = "Yw6IxSX8YpY35sHtNTWxf4rNYmBqd5Wy3TrynWDczPbKm91N8PWkZuIqB-JN8PRQBD-5fJYvXiX00xnbaaarDLxJ7qj9hf7yiP7poWRV7f5SeVnIJqjz9UCffbrLWnYx";



const yelp = require('yelp-fusion');
const client = yelp.client(yelp_key);






router.get('/', (request, response) => {
    console.log("hereeeeee");
	q = request.query;
	console.log(q);
	if(q.location_text){
		getGeo(request.query.location_text, q, response);
	}
	else if(q.distance){
		getPlaces(q.location,q.category,q.distance,q.keyword, response);
	}
	else if(q.placeid){
		getDetails(q.placeid, response);
	}
	else if(q.pagetoken){
		getNextPage(q.pagetoken, response);
	}
	else if(q.city){
		console.log('fetching yelp');
		getYelpReviews(q.name, q.city, q.state, q.country, q.latitude, q.longitude, q.address1, q.address2, q, response);
	}
	else if(q.address){
		getGeo4Map(q.address, q, response);
	}
	else if(q.origin){
		console.log('getting directions');
		getDirections(q.origin, q.destination, q.mode, response);
	}
    else {
  	 	console.log("heererere");
  	 	response.send({hi:'Hello from Express! '})
  	 }
})




function getYelpReviews(name, city, state, country, latitude, longitude, address1, address2, q,res){
//get business id
	client.businessMatch('best', q).then(response => {
	  let id = response.jsonBody.businesses[0].id;
	  //get reviews using business id
	  client.reviews(id).then(response => {
		  console.log(response.jsonBody.reviews);
		  console.log(response.jsonBody.reviews[0]['url']);
		  response_array = [];
		  for(review of response.jsonBody.reviews){
		  	console.log(review['url']);
		  	let formatted_reviews = {
		  	'author_url': review['url'],
		  	'profile_photo_url': review.user.image_url,
		  	'author_name': review.user['name'],
		  	'rating': review['rating'],
		  	'time': review['time_created'],
		  	'text': review['text']
		  	};
			response_array.push(formatted_reviews);
		  }
		  
		  console.log(response_array);
		  res.json(response_array);
		}).catch(e => {
		  console.log(e);
		});
	}).catch(e => {
	  console.log(e);
	});

}

function getGeo4Map(address, q, res){
	const url = encodeURI("https://maps.googleapis.com/maps/api/geocode/json?address=" + address+"&key="+key);
	console.log(url);
	request.get(url, (error, response, body) => {
		if (error) throw error;
		let json = JSON.parse(body);
		res.json({lat: json.results[0].geometry.location.lat, lng: json.results[0].geometry.location.lng});
	});
}

function getGeo(address, q, res){
	const url = encodeURI("https://maps.googleapis.com/maps/api/geocode/json?address=" + address+"&key="+key);
	console.log(url);
	request.get(url, (error, response, body) => {
		if (error) throw error;
		let json = JSON.parse(body);
		console.log(`Latitude: ${json.results[0].geometry.location.lat} -`,`Longitude: ${json.results[0].geometry.location.lng}`);
		location = json.results[0].geometry.location.lat+","+json.results[0].geometry.location.lng;
		getPlaces(location, q.category,q.distance,q.keyword,res);
	});
}

function getDirections(origin, destination, mode, res){
	const url = encodeURI("https://maps.googleapis.com/maps/api/directions/json?origin=place_id:" + origin + "&destination=place_id:" + destination +  "&mode=" + mode +"&key="+key);
	console.log(url);
	request.get(url, (error, response, body) => {
		if (error) throw error;
		let json = JSON.parse(body);
		console.log(`routes: ${json.routes}`);
		res.json({routes: json.routes});
	});
}


function getPlaces(location,category,distance,keyword, res){
	const url = encodeURI("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+location+"&radius="+distance * 1609 +"&type="+category+"&keyword="+keyword+"&key="+key);
	console.log(url);
	request.get(url, (error, response, body) => {
		if (error) throw error;
		let json = JSON.parse(body);
		res.json(json);
	});
}

function getDetails(id, res){
	const url = encodeURI("https://maps.googleapis.com/maps/api/place/details/json?placeid="+id+"&key="+key);
	console.log(url);
	request.get(url, (error, response, body) => {
		if (error) throw error;
		let json = JSON.parse(body);
		res.json(json);
	});
}

function getNextPage(nextPageToken, res){
	const url = encodeURI("https://maps.googleapis.com/maps/api/place/nearbysearch/json?pagetoken="+nextPageToken+"&key="+key);
	console.log(url);
	request.get(url, (error, response, body) => {
		if (error) throw error;
		let json = JSON.parse(body);
		res.json(json);
	});
}


/* GET api listing. */
//router.get('/', (req, res) => {
//  res.send('api works');
//});

module.exports = router;