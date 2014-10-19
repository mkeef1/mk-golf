/*gamma left right beta up down*/
(function(){
  'use strict';

  angular.module('mk-golf')
  .controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
    $scope.hole = {};

    $scope.start = function(){
      var canvasBall = document.getElementById('ball'),
          ctx    = canvasBall.getContext('2d'),
          centerX = canvasBall.width / 2,
          centerY = canvasBall.height / 2,
          radius = 20;

      if($scope.ball.x > 90){$scope.ball.x = 90;}
      if($scope.ball.x > 90){$scope.ball.x = 90;}
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'green';
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#003300';
      ctx.stroke();
      $scope.ball = canvasBall;

      drawHole();

      $interval(function(){
        $scope.ball = $scope.ball;
      }, 1000);



      //navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);

      console.log('ball', $scope.ball);
      console.log('data', $scope.data);
    };

    function drawHole(){
      var canvasHole = document.getElementById('hole'),
          ctxH    = canvasHole.getContext('2d');
      ctxH.fillRect(0, 0, 100, 100);
      $scope.hole = ctxH;
      console.log('Scopehole', $scope.hole);
      console.log('ctxh', ctxH);
    }

    $scope.reset = function(){
      var position = (Math.random() * 90);
      $scope.hole = (position, position, 100, 100);
    };

    window.addEventListener('deviceorientation', function(data){
      $scope.data = data;
      $scope.ball = {x: $scope.data.gamma, y: $scope.data.beta};
      $scope.$digest();
    });

    /*function onSuccess(acceleration){
      $scope.speed = acceleration;
      alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
    }

    function onError(){
      alert('onError!');
    }*/




  }]);
})();
