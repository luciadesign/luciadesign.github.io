var app = angular.module('luciadesign',['ui.router','ngAnimate'])

app.run(function($rootScope) {

})

app.config(function($stateProvider, $urlRouterProvider) {
	
	$stateProvider
		.state('home',{
			url:'/home/{state}',
			templateUrl: '/templates/home.html',
			controller: 'home'
		})
		.state('project',{
			url:'/project/{anchor}',
			templateUrl: '/templates/project.html',
			controller: 'project'
		})

	$urlRouterProvider
		.otherwise('/home/splash')
})