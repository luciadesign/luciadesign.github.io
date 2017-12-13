app.directive('dirProject', function() {
	return {
		templateUrl: 'directives/project/template.html',
		scope: {
			project: '=project'
		},
		restrict: 'E',
		controller: function($scope,$state) {
			$scope.click = function() {
				$('div.background').slideUp({complete: function() {
					$state.go('project',{ anchor: $scope.project.anchor })
				}}).css({ opacity: 0, transition: 'opacity 0.5s' })
			}
		}
	}
})