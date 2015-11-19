angular.module('starter.controllers', [])

.controller('CalcCtrl', function($scope) {
		console.log('calc ctrl')
	})
.controller('HelpCtrl', function($scope) {
		console.log('help ctrl')
	})

.controller('SettingsCtrl', function($scope) {
		console.log('settings ctrl')
  $scope.settings = {
    enableFriends: true
  };
});
