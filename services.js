app.factory('emailFetcher', ['$http', function($http){
    return $http.get('emails.json')
            .success(function(data){ return data })
            .error(function(data){ return data });
}]);