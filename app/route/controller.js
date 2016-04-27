define([

], function(){
    return [ '$scope', '$store', '$log', '$window', function($scope, $store, $log, $window){
        $scope.data = {
            url: $store.get('url') || ''
        };

        $scope.sync = function(){
            $store.set('url', $scope.data.url);

            var url = 'http://' + $scope.data.url;
            url = url.replace('http://http://', 'http://');

            $window.location.href = url;
        };
    }];
});