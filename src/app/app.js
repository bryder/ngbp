angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ngBoilerplate.hibernationstatus',
  'ui.router',
    'restangular'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, RestangularProvider ) {
        $urlRouterProvider.otherwise( '/home' );


    RestangularProvider.setBaseUrl('http://petworth:5001');
    //RestangularProvider.setListTypeIsArray(false);
    RestangularProvider.setRestangularFields({
        id: "_id"
    });


})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });
})

;

