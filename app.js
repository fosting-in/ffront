var app = angular.module('myApp', []);

app.controller('MyController', function($scope, $http) {
    $http.get('https://newsapi.org/v2/everything?q=tesla&from=2023-12-13&sortBy=publishedAt&apiKey=API_KEY')
        .then(function(response) {
            $scope.data = response.data;
        }, function(error) {
            console.error('Error fetching data:', error);
        });
});
