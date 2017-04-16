var myController = angular.module('myController',[]);

myController.controller('ListController',['$scope','$http', function($scope,$http){
    $http({
        method:'GET',
        url: 'js/data.json'}).then(function(success){
        $scope.projects = success.data;
    });
        
    
}]);
