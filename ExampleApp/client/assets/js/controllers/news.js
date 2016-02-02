(function() {
  'use strict';

  angular.module('application.news', [
    
  ])
  .controller('NewsController', [ '$scope', 
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
                                      Test.selected_test_value.name = 'news';
                                      $scope.selected_test_value = Test.selected_test_value.name;
                                    };
      

    }])
    
    
  ;

})();
