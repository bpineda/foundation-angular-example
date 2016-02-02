(function() {
  'use strict';

  angular.module('application.about', [
    
  ])
  .controller('AboutController', [ '$scope', 
                                  '$stateParams', 
                                  '$state', 
                                  '$controller',
                                  function(
                                            $scope,
                                            $stateParams,
                                            $state,
                                            $controller)
                                  {

                                    $scope.entity = {};

                                    $scope.show_message = function()
                                    {
                                      alert('You are in the about page');
                                    };
      

    }])
    
    
  ;

})();
