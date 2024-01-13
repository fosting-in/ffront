var app = angular.module('myApp', []);
var url1 = "https://3k8nooux38.execute-api.us-east-1.amazonaws.com/prod"
var url2 = 'https://api.fosting.in/api' 

var app = angular.module('myApp', []);

app.controller('MyController', function($scope, $http) {
    var config = {
        headers: {
            'Origin': 'fosting.in',
            'Access-Control-Allow-Origin': 'https://fosting.in'
        }
    };

    $http.get('https://yourbackendapi.com/data', config)
        .then(function(response) {
            $scope.data = response.data;
        }, function(error) {
            console.error('Error fetching data:', error);
        });
});

