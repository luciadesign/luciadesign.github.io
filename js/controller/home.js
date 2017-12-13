app.controller('home', function($scope, $state, projects) {

	$scope.state        = $state.params.state
	$scope.title        = "Hello,";
	$scope.introduction = "I'm Lucia, a Manchester based graphic designer from Slovakia. My passion for visual cultures and storytelling first brought me to the University of Manchester where I earned a degree in Art History. Afterwards I pursued a more functional side of the creative industry and attended the Shillington college of Graphic Design in London. Both of these experiences gave me insight into the wonderful world of all things beautiful and allowed me to not only observe and understand it but to contibute to it as well. I always welcome new exciting challenges so if you enjoy my work please do get in touch about any creative work.";
	$scope.projects     = projects.getAll()

	$('.page-container').on('wheel', function(event) {
		if ( event.originalEvent.wheelDelta < 0 ) {
			$scope.scrollBottom();
		} else {
			hideProjects()
			$scope.scrollTop();
		}
	})

	$('.page-container').on('scroll', function(event) {
		if ( ( event.target.scrollTop == event.target.scrollHeight / 2 ) && $scope.state == 'projects' ) {
			showProjects()
		}
	})

	$scope.openProject = function( anchor ) {
		hideProjects(function() {
			$state.go('project', { anchor: anchor })
		})
	}

	$scope.scrollTop = function() {
		$scope.state = 'splash'
		$state.go('home',{ state:'splash' },{notify:false})
		$(document).ready(function() {
			$('.page-container')[0].scroll({top:0,left:0,behavior:'smooth'})
		})
	}

	$scope.scrollBottom = function() {
		$scope.state = 'projects'
		$state.go('home',{ state:'projects' },{notify:false})
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

	function hideProjects(callback) {
		$('div.center-container.projects').fadeOut(400,callback)
	}

	function showProjects() {
		$('div.center-container.projects').fadeIn(1200)
	}

	switch ($scope.state) {
		case 'splash'  : $scope.scrollTop(); break;
		case 'projects': setBottom(); break;
	}
})