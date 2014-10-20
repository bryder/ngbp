angular.module( 'ngBoilerplate.hibernationstatus', [
  'ui.router',
  'ui.bootstrap',
  'restangular'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'hibernationstatus', {
    url: '/hibernationstatus',
    views: {
      "main": {
        controller: 'HibernationStatusCtrl',
        templateUrl: 'hibernationstatus/hibernationstatus.tpl.html'
      }
    },
    data:{ pageTitle: 'Hibernation Status' }
  });
})

.controller( 'HibernationStatusCtrl', ['$scope', 'Restangular', function HibernationStatusCtrl( $scope, Restangular ) {
        // This is simple a demo for UI Boostrap.
        $scope.dropdownDemoItems = [
            "The first choice!",
            "And another choice for you.",
            "but wait! A third!"
        ];
        console.log("Am I here yet");
        $scope.status_records = Restangular.all("hibernation_status").getList();
        console.log($scope.status_records);



    }]);
