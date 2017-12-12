app.controller('controller.projects', function($scope, projects) {

	$scope.projects = projects.getAll()
	
})