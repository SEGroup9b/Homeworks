/* Import mongoose and define any variables needed to create the schema */
var mongoose = require( 'mongoose' ), 
    Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
  /* your code here */
    code: String,
    name: String,
    coordinates: {
    	latitude: Number,
    	longitude: Number
    },
    address: String,
    updated_at: Date,
    created_at: Date
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre( 'save', function( next ) {
  /* your code here */
  // change the updated_at field to current date
  this.updated_at = new Date();
  // if created_at doesn't exist, add to that field
  if ( !this.created_at ) {
	this.created_at = new Date();
  }
  //if the listing has no name or code, assume invalid listing
  if( !this.name || !this.code ) {
  	next( new Error("entry lacks either a name or code"))
  }

  next();
});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model( 'Listing', listingSchema );

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
