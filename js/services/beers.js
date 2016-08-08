app.service('beerListService', function(){
       
  
  var beerRating = "";


  var userBeersArray = [
        
    {image:"http://images.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/snakevenom.png",name:"Snake Venom", style:"Ale", abv:67.5, rating: 4, beerRating:""},
    {image:"http://images.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/brewdog_taxidermy211_534.jpg",name:"The End of History", style:"Blonde Ale", abv: 50, rating: 3, beerRating:""},
    {image:"http://images.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/beard_beer_0.png",name:"Beard Beer", style:"Ale", abv:25, rating: 2, beerRating:""},
    {image:"http://images.mentalfloss.com/sites/default/files/styles/insert_main_wide_image/public/8c8946604-hellokitty.blocks_desktop_large.jpg",name:"Hello Kitty Beer", style:"Lager", abv: 10, rating: 5, beerRating:""},
    // {image:image, name: name, style:style, abv: abv, rating: rating, beerRating:""},
    // {image:"http://media.thesmalls.com/content/u2/TexasChainsawMassacre.jpg",name:"The Texas Chainsaw Massacre", style:1974, abv:"When Sally hears that her grandfather's grave may have been vandalized, she and her paraplegic brother set out with their friends to investigate. They soon discover a group of crazed, murderous outcasts living next door. One by one, the group is attacked by the chainsaw-wielding Leatherface, who wears a mask of human skin.", rating: 2, beerRating:""}
    ];



  var addBeer = function (beer) {
    
    userBeersArray.push(beer);
    
    
    };


  var removeBeer = function(beer) {
    userBeersArray.splice(userBeersArray.indexOf(beer), 1)  
  }

  var emptyCollection = function () {    
      
    //remove beers from the user collection
    while(userbeersArray.length > 0){
      userbeersArray.splice(0,1);
    }
    
    userBudget.amount = 9;
  }




  return {userBeers:userBeersArray, addBeer:addBeer, removeBeer:removeBeer, emptyCollection:emptyCollection, beerRating:beerRating};


});