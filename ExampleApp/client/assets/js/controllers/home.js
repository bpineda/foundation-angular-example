(function() {
  'use strict';

  angular.module('application.home', [
    
  ])
  .controller('HomeController', [ '$scope', 
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
                                      alert('You clicked on the button');
                                    };
      

    }])
    
    
  ;

})();
