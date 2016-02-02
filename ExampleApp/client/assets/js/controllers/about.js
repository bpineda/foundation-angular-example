(function() {
  'use strict';

  angular.module('application.about', [
    
  ])
  .controller('AboutController', [ '$scope', 
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

                                    $scope.show_message = function()
                                    {
                                      alert('You are in the about page');
                                    };

                                    $scope.change_service_value = function()
                                    {
                                      Test.selected_test_value.name = 'about';
                                      $scope.selected_test_value = Test.selected_test_value.name;
                                    };
      

    }])
    
    
  ;

})();
