var app = angular.module('luciadesign',['ui.router'])

app.run(function($rootScope) {

})

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('main',{
			url:'/main',
			templateUrl: '/templates/main.html',
			controller: 'navCtrl'
		})

	$urlRouterProvider
		.otherwise('/main')
})