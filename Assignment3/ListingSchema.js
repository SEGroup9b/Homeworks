
// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MongoClient = require( 'mongodb' ).MongoClient;

var listingSchema = new Schema( {
    code: number,
    name: String,
    coordinates: {
    	latitude: number,
    	longitude: number
    },
    address: String 
});

//create a model using our schema
var User = mongoose.model( 'User', listingSchema );
//make model available to users in our Node app
module.exports = User; 

MongoClient.connect('mongodb://mitchellirvin:08091994Mi@ds047335.mongolab.com:47335/mitchsdatabase', function( err, db ) {

	if( err ) throw err;

	//Find a doc in our collection
	db.collection( 'coll' ).findOne( {}, function( err, doc ) {

		//print the result
		console.dir( doc );
		//close the DB
		db.close();
	});

	//claim sweet victory
	console.dir( "Called findOne!" );

}