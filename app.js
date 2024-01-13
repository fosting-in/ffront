var app = angular.module('myApp', []);
var url1 = "https://3k8nooux38.execute-api.us-east-1.amazonaws.com/prod"
var url2 = 'https://api.fosting.in/api' 

app.controller('MyController', function($scope, $http) {
    $http.get(url2)
        .then(function(response) {
            $scope.data = response.data;
        }, function(error) {
            console.error('Error fetching data:', error);
        });
});
