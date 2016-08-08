app.controller('mainController', function($scope, beerListService, $sce) {
  
  $scope.userBeers = beerListService.userBeers;

  // $scope.rating = beerListService.beerRating


  $scope.trust = $sce.trustAsHtml;

  $scope.fastar = function (beer) {

    var star = "<i class='fa fa-star' aria-hidden='true'></i>"
    var tempRating = []
      for (j = 0; j < beer.rating; j ++) {
        tempRating.push(star)
      }
     beer.beerRating = tempRating.join("")
    return beer.beerRating
  }
 

  $scope.addBeer = function(beer) {
    var beer = {
      image: $scope.image,
      name: $scope.name,
      style: $scope.style,
      abv: $scope.abv,
      rating: $scope.rating
    }
      console.log("about to push ", beer)
      
      beerListService.addBeer(beer);
  }
  
  $scope.removeBeer = function(beer) {
    beerListService.removeBeer(beer);
    
  }

  $scope.emptyCollection = function () {
    beerListService.emptyCollection()

  }
  
  $scope.showMe = function(){
    if($scope.userBeers.length === 0) {
      return true;
    }else{
      return false;
    }
  }


  $scope.beerRating = function() {
    beerListService.ratingStar()
  }
  

});
