app.controller('controller.splash', function($scope,$state) {

	$scope.title   = "TITLE"
	$scope.summary = "SUMMARY"

	$(document).on('wheel', function(event) {
		if ( event.originalEvent.wheelDelta < 0 ) {
			$scope.$emit('navigation:splash:projects')
		}
	})

})