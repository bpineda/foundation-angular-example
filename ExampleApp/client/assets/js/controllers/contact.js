(function() {
  'use strict';

  angular.module('application.contact', [
    
  ])
  .controller('ContactController', [ '$scope', 
                                  '$stateParams', 
                                  '$state', 
                                  'Test',
                                  '$controller',
                                  function(
                                            $scope,
                                            $stateParams,
                                            $state,
                                            Test,
                                            $controller)
                                  {

                                    $scope.entity = {};
                                    $scope.selected_test_value = Test.selected_test_value.name;

                                    $scope.change_service_value = function()
                                    {
                                      Test.selected_test_value.name = 'contact';
                                      $scope.selected_test_value = Test.selected_test_value.name;
                                    };
      

    }])
    
    
  ;

})();
