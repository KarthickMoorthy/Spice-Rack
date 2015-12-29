angular.module('Spicerack-app').controller('editController', function($scope,$location,$http,$rootScope) {
    
    
  // function to submit the form after all validation has occurred            
  $scope.submitForm = function(isValid, user) {
        
    // check to make sure the form is completely valid
        
        var jsonData = JSON.stringify(user);
        
      
        var request = $.ajax({
            
          url: 'http://localhost:8080/Spicerack/rest/book',
          type: 'POST',
          data:jsonData,
          headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
          },
          dataType: 'json',
		  complete: function(response) {
              if(response.responseText == 'success'){ 
                  console.log("login success");
                  alert("Table reservation successful");
                  $location.path('/');
              }
              else if(response.responseText == 'fail'){
                  
                   $scope.msgalert='Booking Failed. Required number of seats not available';
              }
              $scope.$apply();
          }
          
        }); 

  }
  

});