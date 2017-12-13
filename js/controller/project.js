app.controller('project', function($scope, $state, projects) {
	$scope.project = projects.get( $state.params.anchor )

	$scope.scrollTop = function() {
		$(document).ready(function() {
			$('.page-container')[0].scroll({top:0,left:0,behavior:'smooth'})
		})
	}

	$scope.scrollBottom = function() {
		$(document).ready(function() {
			var scrollHeight = $('.page-container')[0].scrollHeight
			$('.page-container')[0].scroll({top:scrollHeight,left:0,behavior:'smooth'})
		})
	}

	function setBottom() {
		$(document).ready(function() {
			var scrollHeight = $('.page-container')[0].scrollHeight
			$('.page-container')[0].scroll({top:scrollHeight,left:0})
		})
	}

	$('.page-container').on('wheel', function(event) {
		if ( event.originalEvent.wheelDelta < 0 ) {
			$scope.scrollBottom();
		} else {
			//hideProjects()
			$scope.scrollTop();
		}
	})

	$('.page-container').on('scroll', function(event) {
		if ( ( event.target.scrollTop == event.target.scrollHeight / 2 ) && $scope.state == 'projects' ) {
			//showProjects()
		}
	})
})