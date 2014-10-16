(function(){
  'use strict';

  angular.module('mk-golf')
  .controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
    $scope.ball = {};

    $scope.reset = function(){
      $scope.ball.x = parseFloat(Math.random());
      $scope.ball.y = parseFloat(Math.random());
      console.log('ballPosxre>', $scope.ball.x);
      console.log('ballPosyre>', $scope.ball.y);
      $scope.ball = {};
    };
    console.log('ball>', $scope.ball);
    console.log('ballPosx>', $scope.ball.x);
    console.log('ballPosy>', $scope.ball.y);
  }]);
})();
