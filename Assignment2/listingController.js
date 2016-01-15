angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.newListing = {
      coordinates: {
        latitude: 0,
        longitude: 0
      }
    };


    var voidListing = function() {
      $scope.newListing.code = '';
      $scope.newListing.name = '';
      $scope.newListing.address = '';
      $scope.newListing.coordinates.latitude = 0;
      $scope.newListing.coordinates.longitude = 0;
    }; voidListing();

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */

    $scope.addListing = function() {
      var myNewListing = {
        code: $scope.newListing.code,
        name: $scope.newListing.name,
        address: $scope.newListing.address,
        coordinates: {
          latitude: $scope.newListing.coordinates.latitude,
          longitude: $scope.newListing.coordinates.longitude
        }
      };
      $scope.listings.push(myNewListing);
      voidListing();
    };

    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };
    
    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };

  }
]);