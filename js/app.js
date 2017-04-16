var myApp = angular.module('myApp', [
    'ngRoute',
    'myController',
    'ngAnimate'
    ]);


myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/Home', {
        templateUrl : 'partials/Home.html'
    }).
    when('/Projects', {
        templateUrl : 'partials/Projects.html',
        controller: 'ListController'
        
    }).
    when('/Photography',{
        templateUrl : 'partials/Photography.html'  
    }).
    when('/list',{
        templateUrl : 'partials/list.html',
        controller:  'ListController'
    }).
    when('/Profile',{
        templateUrl : 'partials/Profile.html'
    }).
    when('/contact',{
        templateUrl : 'partials/contact.html'
    }).
    otherwise({
        redirectTo : '/Home'
    });
    
    

//     $locationProvider.html5Mode({
//     enabled: true,
//  requireBase: false
//     });
}]);

myApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

$(function() {
   $("li").click(function() {
      // remove classes from all
      $("li").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");
   });
});


