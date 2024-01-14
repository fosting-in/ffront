var app = angular.module('myApp', []);
var url1 = "https://3k8nooux38.execute-api.us-east-1.amazonaws.com/prod"
var url2 = 'https://api.fosting.in/api' 

var app = angular.module('myApp', []);

app.controller('MyController', function($scope, $http) {
    $http({
        method: 'GET',
        url: 'https://api.fosting.in/api',
        withCredentials: false
    }).then(function successCallback(response) {
        console.log(response);
    }, function errorCallback(response) {
        console.log('Error: ', response);
    });
    // const xhr = new XMLHttpRequest();
    // xhr.open("GET", "https://api.fosting.in/api", true);
    // xhr.withCredentials = false;
    // xhr.send(null);
    // console.log(xhr)
});

