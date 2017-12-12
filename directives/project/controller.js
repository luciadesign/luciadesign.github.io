app.directive('dirProject', function() {
	return {
		templateUrl: 'directives/project/template.html',
		scope: {
			project: '=project'
		},
		restrict: 'E',
		controller: function($scope) {

			$scope.click = function() {

			}

			$scope.hover = function() {

			}

		}
	}
})