var app = angular.module('myApp', []);

app.controller('MyController', function($scope, $http) {
    $http.get('https://api.fosting.in/api')
        .then(function(response) {
            $scope.data = response.data;
        }, function(error) {
            console.error('Error fetching data:', error);
        });
});
