angular.module('application.services', [])

.factory('Test', function($http) {

    return {

        //Selected test value to be saved between states
        selected_test_value : {
            name : null
        },
    }

});