var app = angular.module('luciadesign',['ui.router','ngAnimate'])

app.run(function($rootScope, $state) {

	$rootScope.$on('navigation:projects:splash', function(evt) {
		$('div.background').slideUp(function() {
			$state.go('splash')
		}).css({ opacity: 0, transition: 'opacity 0.5s' })
	})

	$rootScope.$on('navigation:splash:projects', function(evt) {
		$('div.background').slideUp(function() {
			$state.go('projects')
		}).css({ opacity: 0, transition: 'opacity 0.5s' })
	})

	$rootScope.$on('$stateChangeSuccess', function(evt, toparams) {
		$(document).ready(function() {
			$('div.background').hide().css({ opacity: 0 })
			$('div.background').slideDown().css({ opacity: 1, transition: 'opacity 0.5s' })
		})
	})

})

app.config(function($stateProvider, $urlRouterProvider) {
	
	$stateProvider
		.state('splash',{
			url:'/splash',
			templateUrl: '/templates/splash.html',
			controller: 'controller.splash'
		})
		.state('projects',{
			url:'/projects',
			templateUrl: '/templates/projects.html',
			controller: 'controller.projects'
		})
		.state('project', {
			url:'/project/{anchor}',
			templateUrl: '/templates/project.html',
			controller: 'controller.project'
		})

	$urlRouterProvider
		.otherwise('/splash')
})