define([

], function(){    
    return [ '$scope', '$store', '$log', '$cordovaInAppBrowser', function($scope, $store, $log, $cordovaInAppBrowser){
        $scope.issync = false;
        $scope.data = {
            url: $store.get('url') || ''
        };

        $scope.sync = function(){
            $store.set('url', $scope.data.url);

            var url = 'http://' + $scope.data.url;
            url = url.replace('http://http://', 'http://');

            $scope.issync = true;
            document.getElementById('iframe').src = url;
            /*$cordovaInAppBrowser.open(url, '_self', {
                location: 'yes',
                clearcache: 'yes',
                toolbar: 'no'
            });*/
        };
    }];
});