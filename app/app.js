( function() {
	'use strict';
	angular.module( 'app', [
			'ngRoute',
			'app.home',
			'app.sampleData'
	] );
	angular.module( 'app' ).controller( 'mainController', function( $scope ) {
		$scope.tagline = 'Lorem ipsum dolor';
	} );
	angular.module( 'app' ).config( [
			'$routeProvider',
			'$locationProvider',
				function( $routeProvider, $locationProvider ) {
					$routeProvider		// Home page
.when( '/', {
	templateUrl: 'components/views/home.html',
	controller: 'homeController'
} ).when( '/samples', {
	templateUrl: 'shared/views/sampleData.html',
	controller: 'sampleDataController'
} ).otherwise( { redirectTo: '/' } );
					$locationProvider.html5Mode( true );
				}
		] );
}() );
