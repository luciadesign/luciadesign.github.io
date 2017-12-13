app.controller('controller.projects', function($scope, projects) {

	$scope.projects = projects.getAll()

	$(document).on('wheel', function(event) {
		if ( event.originalEvent.wheelDelta > 0 ) {
			$scope.$emit('navigation:projects:splash')
		}
	})
	
})