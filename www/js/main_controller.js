/*gamma left right beta up down*/
(function(){
  'use strict';

  angular.module('mk-golf')
  .controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
    $scope.hole = {};

    $scope.start = function(){
      var canvas = document.getElementById('ball'),
          ctx    = canvas.getContext('2d'),
          centerX = canvas.width / 2,
          centerY = canvas.height / 2,
          radius = 70;
      $scope.ball = canvas;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'green';
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#003300';
      ctx.stroke();

      $interval(function(){
        $scope.ball = $scope.ball;
      }, 1000);

      console.log('ball', $scope.ball);
      console.log('data', $scope.data);
    };

    $scope.reset = function(){
      $scope.hole.x = parseFloat((Math.random()) * 20).toFixed();
      $scope.hole.y = parseFloat((Math.random()) * 20).toFixed();
      $scope.hole = {x: $scope.hole.x, y: $scope.hole.y};
    };

    window.addEventListener('deviceorientation', function(data){
      $scope.data = data;
      $scope.ball = {x: $scope.data.gamma, y: $scope.data.beta};
      $scope.$digest();
    });



  }]);
})();
