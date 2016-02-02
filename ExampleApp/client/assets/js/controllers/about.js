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
                                    console.log('Loaded');
                                    console.log(Test.selected_test_value);

                                    $scope.show_message = function()
                                    {
                                      alert('You are in the about page');
                                    };
      

    }])
    
    
  ;

})();
