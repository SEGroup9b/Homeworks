
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

// Connect to database
mongoose.connect( config.db.uri );


/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.findOne( {'name': 'Library West'}, function( err, listing ) {
    if( err ) throw err; 
    console.log('\nFind Library West: \n' + listing + "\n\n\n");
   });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This corresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
  */
  // find and remove what we're looking for
  Listing.findOneAndRemove( { code: 'CABL' }, function( err, listing ) {
    if ( err ) throw err;
    if( listing == null ) console.log( 'No CABL listings found.' );
    else console.log( '\nCABL listing has been removed' );
  });
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   Listing.findOneAndUpdate( {name: 'Phelps Laboratory'}, { $set: {address: '404 Bad Error Rd, System Error, OS 14159, United States'}}, function( err, listing ) {
    if( err ) throw err; 
    //return updated user
    console.log( listing );
   });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   Listing.find( {}, function( err, allListings ) {
    if( err ) throw err;
    //return all listings
    console.log( allListings );
   });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();