app.controller('project', function($scope, $state, projects) {
	$scope.project = projects.get( $state.params.anchor )

	$scope.show_nav_right = true
	$scope.show_nav_left  = false
	$scope.selected_image = 0

	var loaded_images = []
	var unloaded = 0
	for (var i = 0; i < $scope.project.images.length; i++) {
		unloaded++
		var imgsrc = $scope.project.images[i].src
		var img = new Image()
		img.src = imgsrc
		img.onload = function() {
			unloaded--
			if ( unloaded == 0 ) { testImages() }
		}
		loaded_images.push(img)
	}

	function testImages() {
		var ratio = $('.images div.wrapper').height() / $('.images div.wrapper').width()
		for (var i = 0; i < loaded_images.length; i++) {
			var img = loaded_images[i]
			$scope.project.images[i].tall = img.height >= img.width*ratio
		}
		
	}

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
})