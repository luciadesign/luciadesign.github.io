app.controller('controller.project', function($scope, $state, projects) {
	$scope.project = projects.get( $state.params.anchor )
})