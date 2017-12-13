app.controller('project', function($scope, $state, projects) {
	$scope.project = projects.get( $state.params.anchor )

	$scope.show_nav_right = true
	$scope.show_nav_left  = false
	$scope.selected_image = 0

	$(document).ready(sizeImages)
	$(window).resize(sizeImages)

	$scope.navRight = function() {
		var wrapper   = $('.images div.wrapper')
		var images    = $('.image-container')
		var scroll    = wrapper[0].scrollLeft + wrapper[0].scrollWidth / images.length
		wrapper[0].scroll({ left:scroll, top:0, behavior:'smooth' })
		$scope.selected_image++
		$scope.show_nav_left  = $scope.selected_image > 0
		$scope.show_nav_right = $scope.selected_image < images.length - 1
	}

	$scope.navLeft = function() {
		var wrapper   = $('.images div.wrapper')
		var images    = $('.image-container')
		var scroll    = wrapper[0].scrollLeft - wrapper[0].scrollWidth / images.length
		wrapper[0].scroll({ left:scroll, top:0, behavior:'smooth' })
		$scope.selected_image--
		$scope.show_nav_left  = $scope.selected_image > 0
		$scope.show_nav_right = $scope.selected_image < images.length - 1
	}

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

	function sizeImages() {
		var image_width = $('.images div.wrapper').width()
		$('.image-container').css({ width: image_width})
		$('.images-container').css({ width: image_width*$scope.project.images.length})
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