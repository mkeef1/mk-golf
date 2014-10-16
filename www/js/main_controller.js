(function(){
  'use strict';

  angular.module('mk-golf')
  .controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
    $scope.ball = {};

    $scope.reset = function(){
      $scope.ball.x = parseFloat((Math.random()) * 20).toFixed();
      $scope.ball.y = parseFloat((Math.random()) * 20).toFixed();
      $scope.ball = {x: $scope.ball.x, y: $scope.ball.y};
      console.log('ballPosxre>', $scope.ball.x);
      console.log('ballPosyre>', $scope.ball.y);
    };

    window.addEventListener('deviceorientation', function(data){
      $scope.data = data;
      $scope.$digest();
    });


    console.log('ball>', $scope.ball);
    console.log('ballPosx>', $scope.ball.x);
    console.log('ballPosy>', $scope.ball.y);
  }]);
})();
