app.directive('dirProject', function() {
	return {
		templateUrl: 'directives/project/template.html',
		scope: {
			project: '=project'
		},
		restrict: 'E',
		controller: function($scope,$state) {

			$scope.click = function() {
				$('div.background').slideUp().css({ opacity: 0, transition: 'opacity 0.5s' })
				$('#'+$scope.project.anchor+'.project').effect('puff',{percent:300,complete: function() {
					$state.go('project',{ anchor: $scope.project.anchor })
				}})
			}

		}
	}
})