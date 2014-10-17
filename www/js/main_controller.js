/*gamma left right beta up down*/
(function(){
  'use strict';

  angular.module('mk-golf')
  .controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
    $scope.hole = {};

    $scope.start = function(){
      navigator.compass.getCurrentHeading(onSuccess, onError);
    };

    function onSuccess(data){
      alert('heading', data.magneticHeading);
    }

    function onError(err){
      alert('error', err);
    }

    $scope.reset = function(){
      $scope.hole.x = parseFloat((Math.random()) * 20).toFixed();
      $scope.hole.y = parseFloat((Math.random()) * 20).toFixed();
      $scope.hole = {x: $scope.hole.x, y: $scope.hole.y};
    };

    /*function success(data){
      $scope.ball = data;
      console.log('data', $scope.ball);
    }*/

    window.addEventListener('deviceorientation', function(data){
      $scope.data = data;
      $scope.$digest();
    });



  }]);
})();
