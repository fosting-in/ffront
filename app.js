var app = angular.module('myApp', []);
var url1 = "https://3k8nooux38.execute-api.us-east-1.amazonaws.com/prod"
var url2 = 'https://api.fosting.in/api' 

var app = angular.module('myApp', []);

app.controller('MyController', function($scope, $http) {
    // var config = {
    //     headers: {
    //         'Access-Control-Allow-Origin': '*'
    //     }
    // };
    // $http.get(url2, config)
    //     .then(function(response) {
    //         $scope.data = response.data;
    //     }, function(error) {
    //         console.error('Error fetching data:', error);
    //     });
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.fosting.in/api", true);
xhr.withCredentials = false;
xhr.send(null);
console.log(xhr)
});

