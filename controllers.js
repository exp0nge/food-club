app.controller('MainController', ['emailFetcher', function(emailFetcher){
    var vm = this;
    vm.title = 'Food Club'
    vm.slogan = 'Club event data aggregator'
    emailFetcher.success(function(data){
        vm.data = data;
    });
}]);

app.controller('EmailController', ['$routeParams', 'emailFetcher',  function($routeParams, emailFetcher){
    var vm = this;
    emailFetcher.success(function(data){
        vm.email = data[$routeParams.id];
    });
}]);