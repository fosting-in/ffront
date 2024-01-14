var app = angular.module('myApp', []);
var url1 = "https://3k8nooux38.execute-api.us-east-1.amazonaws.com/prod"
var url2 = 'https://api.fosting.in/apiprod' 

var app = angular.module('myApp', []);

app.controller('MyController', function($scope, $http) {
    $http({
        method: 'GET',
        url: url2,
        withCredentials: false
    }).then(function successCallback(response) {
        console.log(response);
        $scope.x = response.data;
    }, function errorCallback(response) {
        console.log('Error: ', response);
    });
});

