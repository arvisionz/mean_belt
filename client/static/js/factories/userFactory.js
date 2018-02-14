
pollsApp.factory('userFactory', function($http, $sessionStorage){
    var factory = {};
    //initialize session storing user
    $sessionStorage.currUser;

    function fetchJson(method, path, data) {
      return $http[method](path, data).then(function(res){return res.data});
    }

    
    factory.login = function(newUser, callback){
        fetchJson('post', '/login', newUser)
        .then(function(output){
            $sessionStorage.currUser = output;
            callback(output);
        });
    };

    factory.logout = function(){
        console.log("logged out!");
        $sessionStorage.$reset();
    };

    factory.user = function(){
        return $sessionStorage.currUser;
    };

    return factory;
})
